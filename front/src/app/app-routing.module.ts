import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MoviesComponent } from './component/movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes de navegación

import { RegistroComponent } from './component/registro/registro.component';
import { LoginComponent } from './component/login/login.component';
import { PerfilUsuarioComponent } from './component/perfil-usuario/perfil-usuario.component';

// Relacionar rutas con componentes


const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilUsuarioComponent}

  
];
// Importamos en la raíz de RouterModule el array de rutas y luego exportamos el nuevo Módulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
