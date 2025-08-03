import { Router } from 'express';
import {
  createPet,
  getPets,
  getPetById,
  updatePetPatch,
  updatePetPut,
  deletePet
} from '../controller/pet.ts';

const router = Router();

router.post('/', createPet);
router.get('/', getPets);
router.get('/:id', getPetById);
router.patch('/:id', updatePetPatch); // PATCH: partial update
router.put('/:id', updatePetPut);     // PUT: full update
router.delete('/:id', deletePet);

export default router;
