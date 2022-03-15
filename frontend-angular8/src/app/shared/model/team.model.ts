import { IUser } from "./user.model";

export interface ITeam {
    id?: number;
    name: string;
    description: string | null;
    step_counter?: number | null;
}