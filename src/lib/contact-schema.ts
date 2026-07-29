import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid work email is required"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company or organization name is required"),
  projectType: z.enum(["corporate", "real-estate", "events", "other"], {
    errorMap: () => ({ message: "Please select a project category" }),
  }),
  services: z.array(z.string()).optional(),
  budget: z.string().min(1, "Please select an estimated budget range"),
  timeframe: z.string().min(1, "Please select a timeframe"),
  location: z.string().optional(),
  projectDetails: z.string().min(10, "Please provide at least 10 characters detailing your project"),
  referralSource: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
