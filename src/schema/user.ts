import z from "zod";

export const userSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().min(2).max(100),
  email: z.string(),
  password: z.string().min(8).max(100)
})

export type User = z.infer<typeof userSchema>;