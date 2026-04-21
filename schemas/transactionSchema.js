 import { z } from 'zod';

export const transactionValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  amount: z.number().refine(n => n !== 0, "Amount cannot be zero"),
  type: z.enum(['income', 'expense'], {
    errorMap: () => ({ message: "Type must be either 'income' or 'expense'" })
  }),
  category: z.string().min(1, "Category is required"),
});