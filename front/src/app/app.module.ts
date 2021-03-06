import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




// Importar módulo de rutas
import { AppRoutingModule } from './app-routing.module';
// Importar Módulo Formularios
import { FormsModule } from '@angular/forms';
// Importar el módulo HttpClientModule
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';

/* import { InMemoryDataService } from './service/in-memory-data.service'; */
import { MoviesComponent } from './component/movies/movies.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { JoinPipe } from './pipe/join.pipe';
import { MinutePipe } from './pipe/minute.pipe';
import { ShowtimesComponent } from './component/showtimes/showtimes.component';
import { DayPipe } from './pipe/day.pipe';
import { DatabaseService } from './service/database.service';
/* import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; */
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SafePipe } from './pipe/safe.pipe';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MoviesGridComponent } from './component/movies-grid/movies-grid.component';
import { MoviesSliderComponent } from './component/movies-slider/movies-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginComponent } from './component/login/login.component';
import { PerfilUsuarioComponent } from './component/perfil-usuario/perfil-usuario.component';
import { RegistroComponent } from './component/registro/registro.component';
import { ConfiteriaComponent } from './component/confiteria/confiteria.component';
import { TybaEmpresaComponent } from './component/tyba-empresa/tyba-empresa.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import { AdminComponent } from './component/admin/admin.component';

// Importar Servicio Usuario y película
import { UsuarioService } from './service/usuario.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeliculaService } from './service/pelicula.service';
import { IntroComponent } from './component/intro/intro.component';
import { BoleteriaComponent } from './component/boleteria/boleteria.component';
import { MembresiasComponent } from './component/membresias/membresias.component';

/* import { SillasComponent } from './component/sillas/sillas.component'; */



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    FrontpageComponent,
    ShowtimesComponent,
    JoinPipe,
    MinutePipe,
    DayPipe,
    MoviesListComponent,
    SafePipe,
    MovieSearchComponent,
    MoviesGridComponent,
    MoviesSliderComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    ConfiteriaComponent,
    TybaEmpresaComponent,
    AdminComponent,
    IntroComponent,
    MembresiasComponent,
    CategoriasComponent,
    MovieInfoComponent,
    BoleteriaComponent


/*     SillasComponent */
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,   
    ModalModule.forRoot(),
    HttpClientModule,
   CarouselModule.forRoot(),
    BrowserAnimationsModule,
/*     HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),  */
    

  ],
  providers: [DatabaseService, UsuarioService, PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
