import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "./types/game";

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
}