import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';
import { GamesRoutingModule } from './games-routing.module';



@NgModule({
  declarations: [
    AllGamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  exports: [AllGamesComponent]
})
export class GamesModule { }
