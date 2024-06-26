import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "./types/game";
import { CommentForGame } from "./types/comment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    createGame(title: string, genre: string, price: number, gamemode: string, imageUrl: string, year: number, programmer: string, description: string) {
        return this.http.post<Game>('/api/games', {
            title,
            genre,
            price,
            gamemode,
            imageUrl,
            year,
            programmer,
            description
        });
    }

    getGames() {
        return this.http.get<Game[]>('/api/games');
    }

    getLatestGames() {
        return this.http.get<Game[]>('/api/games/latest-games');
    }

    getOneGame(gameId: string) {
        return this.http.get<Game>(`/api/games/${gameId}`);
    }

    editGame(gameId: string, gameData: object) {
        return this.http.put(`/api/games/${gameId}`, gameData);
    }

    deleteGame(gameId: string) {
        return this.http.delete(`/api/games/${gameId}`);
    }

    addComment(gameId: string, commentText: string) {
        return this.http.post(`/api/comments/${gameId}`, { text: commentText });
    }

    getComments(gameId: string) {
        return this.http.get<any[]>(`/api/comments/${gameId}`);
    }
}