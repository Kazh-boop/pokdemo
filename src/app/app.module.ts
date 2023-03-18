import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './filter-pokemon--pipe.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchIdComponent,
        FilterPokemonPipe,
        PokemonDetailComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
