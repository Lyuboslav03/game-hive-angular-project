import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';
import { Observable, map, switchMap, of, catchError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GameGuard implements CanActivate {

    constructor(private userService: UserService, private apiService: ApiService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const gameId = route.params['gameId'];
        
        return this.userService.getUser().pipe(
            switchMap(user => {
                if (!user) {
                    this.router.navigate(['/'])
                    return of(false);
                }

                const userId = user._id;

                return this.apiService.getOneGame(gameId).pipe(
                    map(game => {
                        if (user && game.userId._id === userId) {
                            return true;
                        } else {
                            this.router.navigate(['/login']);
                            return false;
                        }
                    })
                )
            }),
            catchError(() => {
                this.router.navigate(['/']);
                return of(false);
            })
        )
    }
}
