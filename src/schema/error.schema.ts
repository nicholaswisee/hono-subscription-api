import { z } from "@hono/zod-openapi";

export const errorSchema = z.object({
  error: z.boolean().default(true),
  message: z.string(),
  code: z.number().optional(),
});