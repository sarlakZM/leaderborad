import BaseService from "./base.service";
import { IUser } from '../interfaces/user';
import { IScore } from "../interfaces/base_item";
import UserDao from "../models/user.dao";

export default class UserService extends BaseService<IUser, UserDao > {
    constructor(userDao: UserDao){
        super(userDao)
    }   
    
    getAllByFilter = async (filter: any): Promise<Array<IUser>>  =>  this.entityDao.getAllByFilter(filter);

}

