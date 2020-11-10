import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { NavbarComponent } from './presentation/shared/layout/navbar/navbar.component';
import { FooterComponent } from './presentation/shared/layout/footer/footer.component';
import { InitialVetorComponent } from './presentation/pages/initial-vetor/initial-vetor.component';
import { ServicesComponent } from './presentation/pages/services/services.component';
import { ContactComponent } from './presentation/pages/contact/contact.component';
import { CustomersComponent } from './presentation/pages/customers/customers.component';
import { GalleryComponent } from './presentation/pages/gallery/gallery.component';
import { ContactNavComponent } from './presentation/pages/contact-nav/contact-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InitialVetorComponent,
    ServicesComponent,
    ContactComponent,
    CustomersComponent,
    GalleryComponent,
    ContactNavComponent,
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
