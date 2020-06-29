import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MoviesComponent } from './component/movies/movies.component';



// Importar los componentes de navegación

import { RegistroComponent } from './component/registro/registro.component';
import { LoginComponent } from './component/login/login.component';
import { PerfilUsuarioComponent } from './component/perfil-usuario/perfil-usuario.component';
import { ConfiteriaComponent } from './component/confiteria/confiteria.component';
import { TybaEmpresaComponent } from './component/tyba-empresa/tyba-empresa.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { AdminComponent } from './component/admin/admin.component';
import { IntroComponent } from './component/intro/intro.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';



// Relacionar rutas con componentes


const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilUsuarioComponent},
  { path: 'confiteria', component: ConfiteriaComponent},
  { path: 'tyba-empresa', component: TybaEmpresaComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'movie-info', component: MovieInfoComponent }
  
];

// Importamos en la raíz de RouterModule el array de rutas y luego exportamos el nuevo Módulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
