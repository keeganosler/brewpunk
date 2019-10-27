import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button'
import { RandomBeerComponent } from './main/random-beer/random-beer.component';
import { SearchBeersComponent } from './main/search-beers/search-beers.component';
import { CustomizeBeerComponent } from './main/customize-beer/customize-beer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RandomBeerComponent,
    SearchBeersComponent,
    CustomizeBeerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
