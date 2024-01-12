import { z } from "zod";

export const UserRegistrationSchema = z.object({
  userId: z.number().optional(),
  phoneNumber: z
    .string()
    .trim()
    .min(10, {
      message: "too short for a phone Number",
    })
    .max(10, {
      message: "too big for a phone number",
    }),
  rollNumber: z
    .string()
    .trim()
    .min(2, {
      message: "too short for a roll Number",
    })
    .max(20, {
      message: "too big for a roll number",
    }),
  name: z
    .string()
    .trim()
    .min(2, {
      message: "too short for a name",
    })
    .max(20, {
      message: "name is too big",
    }),
  course: z.enum(["bca", "mca", "btech", "mtech", "bcom", "mba"]),
  email: z
    .string()
    .email({
      message: "please enter a valid email address",
    })
    .trim(),
});

export const ContactFormEmailSchema = z.object({
  name: z
    .string({
      required_error: "please specify a name",
    })
    .trim()
    .min(2, {
      message: "too short for a name",
    })
    .max(20, {
      message: "name is too big",
    }),
  email: z.string().email({
    message: "enter a valid email address",
  }),
  message: z.string(),
});
