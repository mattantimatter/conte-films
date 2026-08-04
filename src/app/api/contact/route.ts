import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema } from "@/lib/contact-schema";
import { buildLeadEmail } from "@/lib/lead-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Spam honeypot check — pretend success so bots don't retry.
    if (validatedData.honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received successfully!" });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@contefilms.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Conté Films <hello@contefilms.com>";

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured. Lead was not emailed.");
      if (process.env.NODE_ENV !== "production") {
        console.log("=== CONTE FILMS CONTACT SUBMISSION (dev fallback) ===");
        console.log(JSON.stringify(validatedData, null, 2));
        return NextResponse.json({
          success: true,
          message: "Inquiry logged locally (Resend not configured).",
        });
      }
      return NextResponse.json(
        { success: false, error: "Email delivery is not configured." },
        { status: 503 }
      );
    }

    const { subject, html, text, replyTo } = buildLeadEmail(validatedData);
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to dispatch email via provider." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Inquiry received successfully!" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 422 }
      );
    }
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
