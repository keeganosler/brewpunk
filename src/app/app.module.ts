import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatSliderModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { RandomBeerComponent } from './main/random-beer/random-beer.component';
import { SearchBeersComponent } from './main/search-beers/search-beers.component';
import { CustomizeBeerComponent } from './main/customize-beer/customize-beer.component'
import { HttpService } from './http.service';
import { SingleBeerComponent } from './main/single-beer/single-beer.component';
import { ToSingleBeerService } from './main/services/to-single-beer.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RandomBeerComponent,
    SearchBeersComponent,
    CustomizeBeerComponent,
    SingleBeerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    MatSliderModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [HttpService, ToSingleBeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
