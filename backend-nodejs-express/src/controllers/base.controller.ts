import { Request, Response } from 'express';
import BaseService from '../services/base.service';

export default abstract class BaseController<T, S extends BaseService<T> = BaseService<T>> {

    constructor(protected readonly entityService: S ){ 
    }
    
    async getAll(req: Request, res: Response) {
        try {
            const items: T[] = await this.entityService.findAll();
            res.status(200).json(items);
          } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async getById(req: Request, res: Response) {
        const id: number = parseInt(req.params.id, 10);
        try {
            const item: T= await this.entityService.findOne(id);
            item ? res.status(200).json(item):  res.status(404).json("item not found") ;
           
          } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const body: T = req.body;
            const item: T = await this.entityService.create(body);
            res.status(201).json(item);
          } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id, 10);
            const body: T = req.body;
            const item: T| null = await this.entityService.update(id, body);
            item ? res.status(201).json(item):  res.status(404).json("item not found") ;
          } catch (e: any) {
            res.status(500).json(e.message);
        }
    }
    

    async delete(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id, 10);

            await this.entityService.delete(id);
            res.status(204).json();
          } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

}
