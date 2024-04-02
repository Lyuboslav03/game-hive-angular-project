import { CommentForGame } from "./comment";
import { UserForAuth } from "./user";

export interface Game {
    _id: string;
    title: string;
    genre: string;
    price: number;
    gamemode: string;
    imageUrl: string;
    year: number;
    programmer: string;
    description: string;
    userId: UserForAuth;
    comments: CommentForGame[];
    createdAt: string;
    updatedAt: string;
    _v: number;
}