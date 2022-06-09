import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortadaComponent } from './portada/portada.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'portada',
    component: PortadaComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contactos',
    component: ContactosComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
