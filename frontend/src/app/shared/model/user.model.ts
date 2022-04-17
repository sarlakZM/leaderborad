export interface IUser {
    id: number;
    name: string;
    description: string | null;
    step_counter: number | null;
    prev_step_counter?: number | null;
    team_id?: number | null;

}