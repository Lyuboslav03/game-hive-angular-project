import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CommentForGame } from 'src/app/types/comment';
import { Game } from 'src/app/types/game';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {
  form = this.fb.group({
    text: ['', [Validators.required]],
  })

  gameId: string = '';
  game = {} as Game;
  comments: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private userService: UserService, private router: Router, private fb: FormBuilder) { }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = params['gameId'];
      this.loadComments();
    });

    this.apiService.getOneGame(this.gameId).subscribe((game) => {
      this.game = game;
    });
  }

  loadComments() {
    this.apiService.getComments(this.gameId).subscribe(
      (comments: any[]) => {
        this.comments = comments;
      }
    )
  }

  isOwner(game: Game) {
    const isUserOwner = game.userId?._id === this.userId;

    return !!isUserOwner;
  };

  deleteGame(): void {
    this.apiService.deleteGame(this.gameId).subscribe((game) => {
      this.router.navigate(['/']);

      return game;
    });
  };

  addComment(): void {
    if (this.form.invalid) {
      return;
    }

    const { text } = this.form.value;

    this.apiService.addComment(this.gameId, text!).subscribe((comment) => {
      this.comments.push(comment);
      this.form.reset();
      this.loadComments();
    })
  }

}
