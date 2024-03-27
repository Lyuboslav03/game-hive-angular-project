import { UserForAuth } from "./user";

export interface Game {
    title: string;
    genre: string;
    price: number;
    gamemode: string;
    imageUrl: string;
    year: number;
    programmer: string;
    description: string;
    userId: UserForAuth;
    createdAt: string;
    updatedAt: string;
    _v: number;
}