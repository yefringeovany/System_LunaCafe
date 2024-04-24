import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UsuariosComponent} from "../../pages/usuarios/usuarios.component";
import {CategoriasComponent} from "../../pages/categorias/categorias.component";

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'usuarios', component: UsuariosComponent},
];
