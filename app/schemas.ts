import { z } from 'zod';

export const UserRegistrationSchema = z.object({
  userId: z.number().optional(),
  phoneNumber: z
    .number({
      required_error: 'Phone Number is required',
      invalid_type_error: 'Phone number must be a number type',
    })
    .int()
    .nonnegative()
    .lte(10, {
      message: 'phone number cannot exceed 10 digits',
    }),
  rollNo: z
    .number({
      required_error: 'University Roll Number is required',
      invalid_type_error: 'University Roll number must be a number type',
    })
    .int()
    .gte(6, {
      message: 'roll number must be greater then 6 digits',
    })
    .nonnegative(),
  name: z
    .string()
    .trim()
    .min(2, {
      message: 'too short for a name',
    })
    .max(20, {
      message: 'name is too big',
    }),
  course: z.enum(['bca', 'mca', 'btech']),
  email: z
    .string()
    .email({
      message: 'please enter a valid email address',
    })
    .trim(),
});

type UserRegistrationSchema = z.infer<typeof UserRegistrationSchema>;
