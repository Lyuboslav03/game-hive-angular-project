import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Game } from '../types/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLatestGames().subscribe((games) => {
      this.games = games;
    });
  }
}
