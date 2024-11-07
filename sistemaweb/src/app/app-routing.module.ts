import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { PiepaginaComponent } from './components/piepagina/piepagina.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: IndexComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path:'servicios', component: ServiciosComponent },
  { path: 'producto', component: ProductoComponent },
  { path:'marcas', component: MarcasComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'piepagina', component: PiepaginaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
