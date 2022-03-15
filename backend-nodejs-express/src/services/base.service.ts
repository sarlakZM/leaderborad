import BaseDao from '../models/base.dao';


export default abstract class  BaseService<T, D extends BaseDao<T> = BaseDao<T>>{
    protected constructor(protected readonly entityDao: D) {    
    }

    findAll = async (): Promise<T[]> => this.entityDao.findAll();

    findOne = async (id: number): Promise<T> => this.entityDao.findOne(id);
    
    create = async (newItem: T): Promise<T> => this.entityDao.add(newItem);

    update = async (id: number, itemUpdate: T ): Promise<T | null> => {
        const item = await this.findOne(id);
        if (!item) {
          return null;
        }       
        return this.entityDao.update(id, itemUpdate);
    };

    delete = async (id: number): Promise<null | void> => {
        const item = await this.findOne(id);
        if (!item) {
          return null;
        }
        this.entityDao.delete(id)
    };


}
