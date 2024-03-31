import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  gameId: string = '';

  form = this.fb.group({
    title: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    price: [0, [Validators.required]],
    gamemode: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    year: [0, [Validators.required]],
    programmer: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = params['gameId'];
    });

    this.apiService.getOneGame(this.gameId).subscribe((game) => {
      this.form.setValue({
        title: game.title,
        genre: game.genre,
        price: game.price,
        gamemode: game.gamemode,
        imageUrl: game.imageUrl,
        year: game.year,
        programmer: game.programmer,
        description: game.description
      })
    });
  }

  editGame(): void {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
    
    if (this.form.invalid) {
      return;
    }

    this.apiService.editGame(this.gameId, this.form.value).subscribe(() => {
      this.router.navigate([`/all-games/${this.gameId}`]);
    });
  }
}
