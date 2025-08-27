import z from "zod";

export const subscriptionSchema = z.object({ 
  id: z.number().int().optional(),
  name: z.string().trim().min(2).max(100),
  price: z.number().min(0),
  currency: z.enum(["USD", "EUR", "IDR"]).default("USD"),
  frequency: z.enum(["weekly", "monthly", "yearly"]).default("monthly"),
  category: z.enum(["Sports", "Entertainment", "Health", "Education", "Technology"]),
  paymentMethod: z.string().trim(),
  status: z.enum(["active", "expired", "canceled"]).default("active"),
  startDate: z.date().refine((date) => date > new Date(), {
    message: "Start date must be in the future",
  })
  .transform((val) => new Date(val)),
  renewalDate: z.date().refine((date) => date > new Date(), {
    message: "Renewal date must be in the future",
  })
  .transform((val) => new Date(val)),
  userId: z.number().int().positive()
})

export type Subscription = z.infer<typeof subscriptionSchema>;