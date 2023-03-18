import { Component } from '@angular/core';
import { PokeAPIService } from '../poke-api.service';
import { Pokemon, PokemonDetail } from '../pokemon';
import { ShareDetailService } from '../share-detail.service';

@Component({
    selector: 'app-search-id',
    templateUrl: './search-id.component.html',
    styleUrls: ['./search-id.component.css'],
    providers: [PokeAPIService]
})
export class SearchIdComponent {
    id: string = '';
	pokemonSelectorId: string = '';
	searchPokemonName: string = '';
    pokemonDetail!: PokemonDetail;

    pokemons: Pokemon[] = [];

    constructor(private service: PokeAPIService, private shareDetail: ShareDetailService) {

    }

    ngOnInit(): void {
        this.service.getPokemons().subscribe((data) => {
            data.results.forEach((element, index) => {
                this.pokemons.push(new Pokemon(index.toString(), element.name, element.url));
            });
        });
    }

    go(): void {
        if(this.pokemonSelectorId != ''){
            this.service.getPokemonInfo(this.pokemonSelectorId).subscribe(data => this.pokemonDetail = data);
            this.shareDetail.setValue(this.pokemonSelectorId);
          }
      
    }
}
