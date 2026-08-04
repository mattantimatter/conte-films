import type { ContactFormData } from "@/lib/contact-schema";

export type RealEstateAddonId = "drone" | "photo" | "social";

const SERVICE_MAP: Record<"video" | RealEstateAddonId, string | null> = {
  video: "Luxury Real Estate Tour",
  drone: "FAA Aerial Drone Media",
  photo: null, // covered in project details (no dedicated real-estate stills checkbox)
  social: "Social-First Vertical Cuts",
};

function budgetRangeForTotal(total: number): string {
  if (total < 5000) return "Under $5,000";
  if (total < 10000) return "$5,000 - $10,000";
  if (total < 25000) return "$10,000 - $25,000";
  if (total < 50000) return "$25,000 - $50,000";
  return "$50,000+";
}

function formatUsd(value: number) {
  return value.toLocaleString("en-US");
}

function formatSqft(value: number) {
  return value.toLocaleString("en-US");
}

export function buildRealEstateContactHref(input: {
  sqft: number;
  videoPrice: number;
  addons: Partial<Record<RealEstateAddonId, number>>;
  total: number;
  coverage: string;
  turnaround: string;
}) {
  const selectedAddons = (Object.keys(input.addons) as RealEstateAddonId[]).filter(
    (id) => typeof input.addons[id] === "number"
  );

  const params = new URLSearchParams({
    source: "real-estate-pricing",
    projectType: "real-estate",
    sqft: String(input.sqft),
    video: String(input.videoPrice),
    total: String(input.total),
    coverage: input.coverage,
    turnaround: input.turnaround,
  });

  if (selectedAddons.length) {
    params.set("addons", selectedAddons.join(","));
    for (const id of selectedAddons) {
      params.set(id, String(input.addons[id]));
    }
  }

  return `/contact?${params.toString()}`;
}

function firstParam(
  value: string | string[] | undefined
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

/** Prefill contact form fields from a real-estate pricing deep link. */
export function contactPrefillFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): Partial<ContactFormData> | null {
  if (firstParam(searchParams.source) !== "real-estate-pricing") {
    return null;
  }

  const sqft = Number(firstParam(searchParams.sqft) || "0");
  const videoPrice = Number(firstParam(searchParams.video) || "0");
  const total = Number(firstParam(searchParams.total) || "0");
  const coverage = firstParam(searchParams.coverage) || "Ground video";
  const turnaround = firstParam(searchParams.turnaround) || "7–10 days";
  const addonIds = (firstParam(searchParams.addons) || "")
    .split(",")
    .map((id) => id.trim())
    .filter((id): id is RealEstateAddonId =>
      id === "drone" || id === "photo" || id === "social"
    );

  const services = [SERVICE_MAP.video!];
  for (const id of addonIds) {
    const service = SERVICE_MAP[id];
    if (service) services.push(service);
  }

  const lineItems = [
    `• Property Video (base): $${formatUsd(videoPrice)}`,
    ...addonIds.map((id) => {
      const price = Number(firstParam(searchParams[id]) || "0");
      const label =
        id === "drone"
          ? "Drone Coverage"
          : id === "photo"
            ? "Photography Suite"
            : "Vertical Social Cuts";
      return `• ${label}: $${formatUsd(price)}`;
    }),
  ];

  const projectDetails = [
    "I’m interested in the luxury real estate production package configured on the pricing estimator:",
    "",
    `• Property size: ${formatSqft(sqft)} sq ft`,
    ...lineItems,
    `• Coverage: ${coverage}`,
    `• Estimated turnaround: ${turnaround}`,
    `• Estimated total: $${formatUsd(total)}`,
    "",
    "Please confirm scope, scheduling, and next steps for this production.",
  ].join("\n");

  return {
    projectType: "real-estate",
    services,
    budget: budgetRangeForTotal(total),
    timeframe:
      turnaround.includes("7") || turnaround.includes("10–14")
        ? "Immediate (Next 2 Weeks)"
        : "Within 1 - 2 Months",
    projectDetails,
    referralSource: "Real estate pricing estimator",
  };
}
