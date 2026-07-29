import { NextResponse } from "next/server";
import { z } from "zod";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Spam honeypot check
    if (validatedData.honeypot) {
      return NextResponse.json({ success: false, error: "Invalid submission" }, { status: 400 });
    }

    // Resend Email Adapter Setup
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@contefilms.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "contact@contefilms.com";

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Conté Inquiry <${fromEmail}>`,
          to: [toEmail],
          subject: `[New Inquiry] ${validatedData.projectType.toUpperCase()} — ${validatedData.company}`,
          html: `
            <h2>New Project Inquiry from Conté Films Website</h2>
            <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${validatedData.company}</p>
            <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
            <p><strong>Services Needed:</strong> ${validatedData.services?.join(", ") || "None selected"}</p>
            <p><strong>Estimated Budget:</strong> ${validatedData.budget}</p>
            <p><strong>Timeframe:</strong> ${validatedData.timeframe}</p>
            <p><strong>Location:</strong> ${validatedData.location || "Atlanta Area"}</p>
            <p><strong>Project Details:</strong></p>
            <blockquote style="background:#f4f4f4; padding:12px; border-left:4px solid #c5a880;">
              ${validatedData.projectDetails}
            </blockquote>
            <p><strong>Referral Source:</strong> ${validatedData.referralSource || "Not specified"}</p>
          `,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend API error:", await resendRes.text());
        return NextResponse.json(
          { success: false, error: "Failed to dispatch email via provider." },
          { status: 500 }
        );
      }
    } else {
      // Development / Fallback mode logging
      console.log("=== CONTE FILMS CONTACT SUBMISSION ===");
      console.log(JSON.stringify(validatedData, null, 2));
      console.log("NOTE: RESEND_API_KEY environment variable not configured. Form submission logged successfully.");
    }

    return NextResponse.json({ success: true, message: "Inquiry received successfully!" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 422 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
