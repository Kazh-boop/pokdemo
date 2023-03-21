import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ShareDetailService } from '../share-detail.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {
  searchPokemonName!: string;

  @Output()
  pokemonSearchResults = new EventEmitter<Pokemon[]>;

  @Input("pokemonDB")
  pokemonDB!: Pokemon[];


  constructor(private shareDetailService: ShareDetailService) {}

}
