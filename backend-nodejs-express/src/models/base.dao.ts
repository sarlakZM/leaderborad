import { ITeam } from '../interfaces/team';
import { Items } from '../interfaces/items';

/**
 * NEVER USER THIS CLASS IN REAL LIFE.
 * This class was created to ease the explanation of other topics in the corresponding article.
 * For any real-life scenario, consider using an ODM/ORM to manage your own database in a better way.
 */
 var ID = require("nodejs-unique-numeric-id-generator")

abstract class BaseDao<T> {
    items:{ [key: string] :  Items<T> } = {};
    entity: string = '';

    constructor(entity: string) {
        this.entity = entity;
        this.items[entity] = <any>{};
    }

    findAll = async (): Promise<T[]> => this.items[this.entity] ? Object.values(this.items[this.entity]) : [];

    findOne = async (id: number): Promise<T> => this.items[this.entity][id]

    
    add = async (newItem: T) : Promise<T> => {
        let id: number = ID.generate(new Date().toJSON());
        const item : any = { id, ...newItem }
        this.items[this.entity][id] = item;
        return this.items[this.entity][id];
    }


    update = async (id: number, itemUpdate: T ): Promise<T | null> => {  
        const item : any = { id, ...itemUpdate }
        this.items[this.entity][id] = item;
        return this.items[this.entity][id];
    };


    delete = async (id: number): Promise<null | void> => {
        delete this.items[this.entity][id];
    };

}

export default BaseDao;