// import { type Request, type Response } from 'express';
// import { PrismaClient } from '@prisma/client';
// import { type PetInput } from '../types/pet.ts';
// const prisma = new PrismaClient();
// export const createPet = async (req: Request, res: Response) => {
//   try {
//     const data: PetInput = req.body;
//     const validTypes = ['DOG', 'CAT', 'BIRD', 'OTHER'];
//     if (!validTypes.includes(data.type)) {
//       return res.status(400).json({ error: 'Invalid pet type' });
//     }
//     const pet = await prisma.pet.create({ data });
//     res.status(201).json(pet);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to create pet' });
//   }
// };
// export const getPets = async (_: Request, res: Response) => {
//   try {
//     const pets = await prisma.pet.findMany();
//     res.json(pets);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch pets' });
//   }
// };
// export const getPetById = async (req: Request, res: Response) => {
//   try {
//     const petId = Number(req.params.id);
//     if (isNaN(petId)) return res.status(400).json({ error: 'Invalid pet ID' });
//     const pet = await prisma.pet.findUnique({ where: { id: petId } });
//     if (!pet) return res.status(404).json({ error: 'Pet not found' });
//     res.json(pet);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch pet' });
//   }
// };
// export const updatePet = async (req: Request, res: Response) => {
//   try {
//     const petId = Number(req.params.id);
//     if (isNaN(petId)) return res.status(400).json({ error: 'Invalid pet ID' });
//     // Check if pet exists
//     const existingPet = await prisma.pet.findUnique({ where: { id: petId } });
//     if (!existingPet) return res.status(404).json({ error: 'Pet not found' });
//     // Build data object with only the fields that exist in req.body
//     const data: Partial<PetInput> = {};
//     if (req.body.name !== undefined) data.name = req.body.name;
//     if (req.body.type !== undefined) data.type = req.body.type;
//     if (req.body.age !== undefined) data.age = req.body.age;
//     if (req.body.breed !== undefined) data.breed = req.body.breed;
//     if (Object.keys(data).length === 0) {
//       return res.status(400).json({ error: 'No valid fields provided for update' });
//     }
//     const pet = await prisma.pet.update({
//       where: { id: petId },
//       data,
//     });
//     res.json(pet);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to update pet' });
//   }
// };
// export const deletePet = async (req: Request, res: Response) => {
//   try {
//     const petId = Number(req.params.id);
//     if (isNaN(petId)) return res.status(400).json({ error: 'Invalid pet ID' });
//     await prisma.pet.delete({ where: { id: petId } });
//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete pet' });
//   }
// };
import {} from 'express';
import { PrismaClient } from '@prisma/client';
import {} from "../types/pet.js";
const prisma = new PrismaClient();
export const createPet = async (req, res) => {
    try {
        const data = req.body;
        const validTypes = ['DOG', 'CAT', 'BIRD', 'OTHER'];
        if (!validTypes.includes(data.type)) {
            return res.status(400).json({ error: 'Invalid pet type' });
        }
        const pet = await prisma.pet.create({ data });
        res.status(201).json(pet);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create pet' });
    }
};
export const getPets = async (_, res) => {
    try {
        const pets = await prisma.pet.findMany();
        res.json(pets);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch pets' });
    }
};
export const getPetById = async (req, res) => {
    try {
        const petId = Number(req.params.id);
        if (isNaN(petId))
            return res.status(400).json({ error: 'Invalid pet ID' });
        const pet = await prisma.pet.findUnique({ where: { id: petId } });
        if (!pet)
            return res.status(404).json({ error: 'Pet not found' });
        res.json(pet);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch pet' });
    }
};
export const updatePetPatch = async (req, res) => {
    try {
        const petId = Number(req.params.id);
        if (isNaN(petId))
            return res.status(400).json({ error: 'Invalid pet ID' });
        const existingPet = await prisma.pet.findUnique({ where: { id: petId } });
        if (!existingPet)
            return res.status(404).json({ error: 'Pet not found' });
        const data = {};
        if (req.body.name !== undefined)
            data.name = req.body.name;
        if (req.body.type !== undefined)
            data.type = req.body.type;
        if (req.body.age !== undefined)
            data.age = req.body.age;
        if (req.body.breed !== undefined)
            data.breed = req.body.breed;
        if (Object.keys(data).length === 0) {
            return res.status(400).json({ error: 'No valid fields provided for update' });
        }
        const pet = await prisma.pet.update({
            where: { id: petId },
            data,
        });
        res.json(pet);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update pet (PATCH)' });
    }
};
export const updatePetPut = async (req, res) => {
    try {
        const petId = Number(req.params.id);
        if (isNaN(petId))
            return res.status(400).json({ error: 'Invalid pet ID' });
        const { name, type, age, breed } = req.body;
        if (!name || !type || age === undefined || !breed) {
            return res.status(400).json({ error: 'All fields are required for PUT' });
        }
        const existingPet = await prisma.pet.findUnique({ where: { id: petId } });
        if (!existingPet)
            return res.status(404).json({ error: 'Pet not found' });
        const pet = await prisma.pet.update({
            where: { id: petId },
            data: { name, type, age, breed },
        });
        res.json(pet);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update pet (PUT)' });
    }
};
export const deletePet = async (req, res) => {
    try {
        const petId = Number(req.params.id);
        if (isNaN(petId))
            return res.status(400).json({ error: 'Invalid pet ID' });
        await prisma.pet.delete({ where: { id: petId } });
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete pet' });
    }
};
//# sourceMappingURL=pet.js.map