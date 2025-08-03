import { type Request, type Response } from 'express';
export declare const createPet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getPets: (_: Request, res: Response) => Promise<void>;
export declare const getPetById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePetPatch: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePetPut: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deletePet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
