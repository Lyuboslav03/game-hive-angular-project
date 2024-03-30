import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';
import { GamesRoutingModule } from './games-routing.module';
import { AddGameComponent } from './add-game/add-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentGameComponent } from './current-game/current-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';



@NgModule({
  declarations: [
    AllGamesComponent,
    AddGameComponent,
    CurrentGameComponent,
    EditGameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [AllGamesComponent, AddGameComponent, CurrentGameComponent, EditGameComponent]
})
export class GamesModule { }
