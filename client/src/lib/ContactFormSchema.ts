import { z } from "zod";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export const contactFormSchema = insertContactSchema.extend({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export const newsletterFormSchema = insertNewsletterSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});
