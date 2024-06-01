import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
{path:'',component:PrincipalComponent},
{path:'principal', component:PrincipalComponent},
{path:'peliculas', component:PeliculasComponent},
{path:'nosotros', component:NosotrosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
