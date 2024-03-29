import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {
  gameId: string = '';
  game = {} as Game;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private userService: UserService) { }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = params['gameId'];
    });

    this.apiService.getOneGame(this.gameId).subscribe((game) => {
      this.game = game;
    });
  }

  isOwner(game: Game) {
    const isUserOwner = game.userId?._id === this.userId;

    return !!isUserOwner;
  }

}
