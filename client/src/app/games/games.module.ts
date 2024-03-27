import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';
import { GamesRoutingModule } from './games-routing.module';
import { AddGameComponent } from './add-game/add-game.component';



@NgModule({
  declarations: [
    AllGamesComponent,
    AddGameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  exports: [AllGamesComponent, AddGameComponent]
})
export class GamesModule { }
