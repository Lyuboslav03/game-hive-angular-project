import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  form = this.fb.group({
    title: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    price: [null, [Validators.required]],
    gamemode: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    year: [null, [Validators.required]],
    programmer: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  createGame(): void {
    if (this.form.invalid) {
      return;
    }

    const { title, genre, price, gamemode, imageUrl, year, programmer, description } = this.form.value;

    this.apiService.createGame(title!, genre!, price!, gamemode!, imageUrl!, year!, programmer!, description!).subscribe(() => {
      this.router.navigate(['/all-games']);
    });
  }
}
