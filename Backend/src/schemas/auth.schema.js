import { z } from 'zod';

export const registerSchema = z.object({
  username : z.string({
    required_error: "Username is a required field"
  }),
  email : z.string({
    required_error: "Email is a required field"
  }).email({
    message: "Invalid email address"
  }),
  password: z.string({
    required_error: "Password is a required field"
  }).min(6, {
    message: "Password must be at least 6 characters long."
  })
})

export const loginSchema = z.object({
  email : z.string({
    required_error: "Email is a required field"
  }).email({
    message: "Invalid email address"
  }),
  password: z.string({
    required_error: "Password is a required field"
  }).min(6, {
    message: "Password must be at least 6 characters long."
  })
})