import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '../../../demo/src/app/not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: "register", pathMatch:"full" },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tv', canActivate: [AuthGuard],component: TvComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  {path: 'movieDetails/:bl7', component: MovieDetailsComponent},

  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
