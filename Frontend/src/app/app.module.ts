import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {NgOptimizedImage} from "@angular/common";
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UsuariosComponent,
    CategoriasComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
