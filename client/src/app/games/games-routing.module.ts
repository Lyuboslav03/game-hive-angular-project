import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllGamesComponent } from "./all-games/all-games.component";
import { AddGameComponent } from "./add-game/add-game.component";
import { CurrentGameComponent } from "./current-game/current-game.component";
import { EditGameComponent } from "./edit-game/edit-game.component";
import { AuthGuard } from "../guards/auth.activate";

const routes: Routes = [
    {
        path: 'all-games', children: [
            { path: '', pathMatch: 'full', component: AllGamesComponent },
            { path: ':gameId', component: CurrentGameComponent },
            { path: ':gameId/edit', component: EditGameComponent }
        ]
    },
    {
        path: 'add-game', component: AddGameComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {}