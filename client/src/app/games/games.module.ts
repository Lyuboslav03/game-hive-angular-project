import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';
import { GamesRoutingModule } from './games-routing.module';
import { AddGameComponent } from './add-game/add-game.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllGamesComponent,
    AddGameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [AllGamesComponent, AddGameComponent]
})
export class GamesModule { }
