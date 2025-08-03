import {type Request,type Response } from "express";

export const login=(req:Request,res:Response)=>{
  res.send('login works')
}