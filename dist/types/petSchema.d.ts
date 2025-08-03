import { z } from 'zod';
export declare const petSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    age: z.ZodNumber;
    breed: z.ZodString;
}, z.core.$strip>;
export type PetInput = z.infer<typeof petSchema>;
