import { z } from 'zod'

export const petSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  age: z.number().int().nonnegative("Age must be 0 or greater"),
  breed: z.string().min(1, "Breed is required"),
})

// Optional: TypeScript type inferred from schema
export type PetInput = z.infer<typeof petSchema>
