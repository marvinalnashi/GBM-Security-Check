import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { IPItemsComponent } from './blacklist/ip-items/ip-items.component';
import { URLItemsComponent } from './blacklist/url-items/url-items.component';
import { EmailListComponent } from './email-list/email-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    BlacklistComponent,
    IPItemsComponent,
    URLItemsComponent,
    EmailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
