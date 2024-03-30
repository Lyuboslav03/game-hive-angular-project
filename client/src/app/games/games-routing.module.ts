import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllGamesComponent } from "./all-games/all-games.component";
import { AddGameComponent } from "./add-game/add-game.component";
import { CurrentGameComponent } from "./current-game/current-game.component";
import { EditGameComponent } from "./edit-game/edit-game.component";

const routes: Routes = [
    {
        path: 'all-games', children: [
            { path: '', pathMatch: 'full', component: AllGamesComponent },
            { path: ':gameId', component: CurrentGameComponent },
            { path: ':gameId/edit', component: EditGameComponent }
        ]
    },
    {
        path: 'add-game', component: AddGameComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {}