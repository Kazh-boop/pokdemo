import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './filter-pokemon--pipe.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPokemonPipe,
    PokemonDetailComponent,
    PokemonListComponent,
    SearchPokemonComponent,
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
