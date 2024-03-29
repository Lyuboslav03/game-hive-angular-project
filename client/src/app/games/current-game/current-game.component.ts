import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {
  gameId: string = '';
  game = {} as Game;
  
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = params['gameId'];
    });

    this.apiService.getOneGame(this.gameId).subscribe((game) => {
      this.game = game;
    });
  }
}
