
import { IBaseItem } from "./base_item";

export interface IUser extends IBaseItem {
    id: number;
    team_id?: number;
}