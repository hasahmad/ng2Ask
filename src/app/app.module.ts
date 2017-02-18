import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { AskModule } from './ask-fm/ask.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {AppRoutingModule} from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { AskIslamModule } from './ask-islam/ask-islam.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlayersModule,
    TeamsModule,
    AskModule,
    AskIslamModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
