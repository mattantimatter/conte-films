"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

const projectTypeOptions = [
  { value: "corporate", label: "Corporate & Brand Content" },
  { value: "real-estate", label: "Luxury Real Estate & Architecture" },
  { value: "events", label: "Events & Experiences" },
  { value: "other", label: "Other Visual Production" },
];

const budgetOptions = [
  { value: "Under $5,000", label: "Under $5,000" },
  { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
  { value: "$10,000 - $25,000", label: "$10,000 - $25,000" },
  { value: "$25,000 - $50,000", label: "$25,000 - $50,000" },
  { value: "$50,000+", label: "$50,000+" },
];

const timeframeOptions = [
  { value: "Immediate (Next 2 Weeks)", label: "Immediate (Next 2 Weeks)" },
  { value: "Within 1 - 2 Months", label: "Within 1 - 2 Months" },
  { value: "3 - 6 Months Out", label: "3 - 6 Months Out" },
  { value: "Flexible / Planning Stage", label: "Flexible / Planning Stage" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "corporate",
    services: [],
    budget: "$10,000 - $25,000",
    timeframe: "Within 1 - 2 Months",
    location: "",
    projectDetails: "",
    referralSource: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const availableServices = [
    "Brand & Commercial Film",
    "Luxury Real Estate Tour",
    "FAA Aerial Drone Media",
    "Executive Thought Leadership",
    "Event Recap & Keynotes",
    "Corporate Photography / Headshots",
    "Social-First Vertical Cuts",
    "Ongoing Content Retainer",
  ];

  const handleCheckboxToggle = (service: string) => {
    const currentServices = formData.services || [];
    if (currentServices.includes(service)) {
      setFormData({
        ...formData,
        services: currentServices.filter((s) => s !== service),
      });
    } else {
      setFormData({
        ...formData,
        services: [...currentServices, service],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("loading");
    setErrorMessage("");

    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("error");
      setErrorMessage("Please correct the highlighted fields below.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Submission failed. Please check your inputs or call us directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error sending inquiry. Please email us at hello@contefilms.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-10 rounded-2xl bg-bg-surface border border-accent-bronze/40 text-center space-y-6 animate-in fade-in duration-300 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-accent-bronze/10 text-accent-bronze flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-semibold text-text-primary">
            Project Inquiry Received
          </h3>
          <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Conté Films. Founder Stefan Jobe and our production team will review your project details and respond within 24 business hours.
          </p>
        </div>
        <div className="pt-4 border-t border-border-subtle">
          <p className="text-xs text-text-muted">
            Need urgent assistance? Call direct at{" "}
            <a href="tel:6784440034" className="text-accent-bronze font-semibold hover:underline">
              (678) 444-0034
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-bg-surface p-8 sm:p-10 rounded-2xl border border-border-medium shadow-xl">
      {status === "error" && errorMessage && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            First Name <span className="text-accent-bronze">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={formData.firstName || ""}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            aria-invalid={!!errors.firstName}
            className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
            placeholder="Jane"
          />
          {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            Last Name <span className="text-accent-bronze">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={formData.lastName || ""}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            aria-invalid={!!errors.lastName}
            className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
            placeholder="Smith"
          />
          {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            Work Email <span className="text-accent-bronze">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-invalid={!!errors.email}
            className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            Phone Number <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone || ""}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
            placeholder="(404) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            Company or Organization <span className="text-accent-bronze">*</span>
          </label>
          <input
            id="company"
            type="text"
            required
            value={formData.company || ""}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            aria-invalid={!!errors.company}
            className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
            placeholder="Acme Luxury Group"
          />
          {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
        </div>

        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            Primary Project Category <span className="text-accent-bronze">*</span>
          </label>
          <Select
            id="projectType"
            value={formData.projectType || "corporate"}
            onChange={(value) =>
              setFormData({
                ...formData,
                projectType: value as ContactFormData["projectType"],
              })
            }
            options={projectTypeOptions}
            aria-invalid={!!errors.projectType}
          />
          {errors.projectType && <p className="text-xs text-red-500 mt-1">{errors.projectType}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-3">
          Services Needed <span className="text-text-muted font-normal">(Select all that apply)</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {availableServices.map((service) => {
            const isChecked = formData.services?.includes(service);
            return (
              <label
                key={service}
                className={`flex items-center gap-3 p-3 rounded-md border text-xs cursor-pointer transition-colors ${
                  isChecked
                    ? "bg-bg-elevated border-accent-bronze text-accent-bronze font-semibold"
                    : "bg-bg-primary border-border-subtle text-text-muted hover:border-border-medium"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxToggle(service)}
                  className="rounded border-border-medium text-accent-bronze focus:ring-accent-bronze"
                />
                <span>{service}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            Estimated Budget Range <span className="text-accent-bronze">*</span>
          </label>
          <Select
            id="budget"
            value={formData.budget || "$10,000 - $25,000"}
            onChange={(value) => setFormData({ ...formData, budget: value })}
            options={budgetOptions}
            aria-invalid={!!errors.budget}
          />
          {errors.budget && <p className="text-xs text-red-500 mt-1">{errors.budget}</p>}
        </div>

        <div>
          <label htmlFor="timeframe" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
            Target Timeframe <span className="text-accent-bronze">*</span>
          </label>
          <Select
            id="timeframe"
            value={formData.timeframe || "Within 1 - 2 Months"}
            onChange={(value) => setFormData({ ...formData, timeframe: value })}
            options={timeframeOptions}
            aria-invalid={!!errors.timeframe}
          />
          {errors.timeframe && <p className="text-xs text-red-500 mt-1">{errors.timeframe}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
          Production Location <span className="text-text-muted font-normal">(e.g., Buckhead, Midtown Atlanta, On-Site)</span>
        </label>
        <input
          id="location"
          type="text"
          value={formData.location || ""}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
          placeholder="Atlanta, GA"
        />
      </div>

      <div>
        <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
          Tell Us About Your Project <span className="text-accent-bronze">*</span>
        </label>
        <textarea
          id="projectDetails"
          rows={4}
          required
          value={formData.projectDetails || ""}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          aria-invalid={!!errors.projectDetails}
          className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
          placeholder="Describe your vision, target audience, key deliverables, or shoot requirements..."
        />
        {errors.projectDetails && <p className="text-xs text-red-500 mt-1">{errors.projectDetails}</p>}
      </div>

      <div>
        <label htmlFor="referralSource" className="block text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
          How Did You Hear About Conté Films? <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <input
          id="referralSource"
          type="text"
          value={formData.referralSource || ""}
          onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
          className="w-full px-4 py-3 rounded-md bg-bg-primary border border-border-medium text-text-primary text-sm focus-ring"
          placeholder="Referral, Instagram, Google Search, Buckhead Business Association..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        fullWidth
        disabled={status === "loading"}
        leadingIcon={
          status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : undefined
        }
        icon={status === "loading" ? undefined : <Send className="w-4 h-4" />}
      >
        {status === "loading" ? "Submitting Inquiry…" : "Submit Project Inquiry"}
      </Button>
    </form>
  );
}
