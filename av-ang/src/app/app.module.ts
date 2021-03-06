import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsrHomeComponent } from './usr-home/usr-home.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsrHomeComponent,
    SocialNetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
