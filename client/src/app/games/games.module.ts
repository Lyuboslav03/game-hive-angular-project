import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';



@NgModule({
  declarations: [
    AllGamesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AllGamesComponent]
})
export class GamesModule { }
