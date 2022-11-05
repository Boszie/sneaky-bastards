import { z } from 'zod';

const emailSchema = z.string().email().min(5);
const usernameSchema = z.string().min(5);
const passwordSchema = z.string().min(7);
const confirmPasswordSchema = passwordSchema;

export const registerUserSchema = z
  .object({
    email: emailSchema,
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });
