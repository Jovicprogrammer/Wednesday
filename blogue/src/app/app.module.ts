import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasaeComponent } from './shared/basae/basae.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { CharaComponent } from './shared/chara/chara.component';
import { NevendComponent } from './shared/nevend/nevend.component';
import { PersonaComponent } from './shared/persona/persona.component';
import { FormsComponent } from './shared/forms/forms.component';
import { BeladonaComponent } from './shared/beladona/beladona.component';
import { MaquiavelComponent } from './shared/maquiavel/maquiavel.component';

@NgModule({
  declarations: [
    AppComponent,
    BasaeComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    CharaComponent,
    NevendComponent,
    PersonaComponent,
    FormsComponent,
    BeladonaComponent,
    MaquiavelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
