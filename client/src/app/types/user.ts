import { Game } from "./game";

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    games: Game[];
    _id: string;
}