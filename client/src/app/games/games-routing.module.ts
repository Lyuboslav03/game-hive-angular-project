import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllGamesComponent } from "./all-games/all-games.component";

const routes: Routes = [
    {
        path: 'all-games', children: [
            { path: '', pathMatch: 'full', component: AllGamesComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {}