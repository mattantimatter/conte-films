import type { ContactFormData } from "@/lib/contact-schema";

const PROJECT_TYPE_LABELS: Record<ContactFormData["projectType"], string> = {
  corporate: "Corporate & Brand Content",
  "real-estate": "Luxury Real Estate & Architecture",
  events: "Events & Experiences",
  other: "Other Visual Production",
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 12px 8px 0;color:#6b6560;font-size:13px;vertical-align:top;white-space:nowrap;">${label}</td>
    <td style="padding:8px 0;color:#1a1816;font-size:14px;vertical-align:top;">${value}</td>
  </tr>`;
}

export function buildLeadEmail(data: ContactFormData) {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const projectLabel = PROJECT_TYPE_LABELS[data.projectType];
  const services =
    data.services && data.services.length > 0
      ? data.services.map(escapeHtml).join(", ")
      : "None selected";
  const detailsHtml = escapeHtml(data.projectDetails).replace(/\n/g, "<br />");

  const subject = `[New Inquiry] ${projectLabel} — ${data.company}`;

  const html = `
    <div style="font-family:Georgia,'Times New Roman',serif;max-width:640px;margin:0 auto;color:#1a1816;">
      <h1 style="font-size:22px;font-weight:600;margin:0 0 8px;">New Conté Films inquiry</h1>
      <p style="margin:0 0 24px;color:#6b6560;font-size:14px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
        Submitted via contefilms.com contact form. Reply directly to reach ${escapeHtml(fullName)}.
      </p>
      <table style="width:100%;border-collapse:collapse;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
        ${row("Name", escapeHtml(fullName))}
        ${row("Email", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`)}
        ${row("Phone", escapeHtml(data.phone || "Not provided"))}
        ${row("Company", escapeHtml(data.company))}
        ${row("Project type", escapeHtml(projectLabel))}
        ${row("Services", services)}
        ${row("Budget", escapeHtml(data.budget))}
        ${row("Timeframe", escapeHtml(data.timeframe))}
        ${row("Location", escapeHtml(data.location || "Atlanta Area"))}
        ${row("Referral", escapeHtml(data.referralSource || "Not specified"))}
      </table>
      <div style="margin-top:24px;padding:16px;background:#f7f4ef;border-left:4px solid #c5a880;font-family:-apple-system,BlinkMacSystemFont,sans-serif;">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:#6b6560;">Project details</p>
        <p style="margin:0;font-size:14px;line-height:1.55;color:#1a1816;">${detailsHtml}</p>
      </div>
    </div>
  `;

  const text = [
    "New Conté Films inquiry",
    "",
    `Name: ${fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Company: ${data.company}`,
    `Project type: ${projectLabel}`,
    `Services: ${data.services?.join(", ") || "None selected"}`,
    `Budget: ${data.budget}`,
    `Timeframe: ${data.timeframe}`,
    `Location: ${data.location || "Atlanta Area"}`,
    `Referral: ${data.referralSource || "Not specified"}`,
    "",
    "Project details:",
    data.projectDetails,
  ].join("\n");

  return { subject, html, text, replyTo: data.email };
}
