import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokeAPIService } from '../poke-api.service';
import { Pokemon, PokemonDetail, PokemonServiceRes } from '../pokemon';
import { ShareDetailService } from '../share-detail.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  private limit: number = 2000;
  private offset: number = 0;
  public searchPokemonName: string = "";
  public pokemons: Pokemon[] = [];
  public currentPokemon!: PokemonDetail;

  constructor(
    private service: PokeAPIService,
    private shareDetail: ShareDetailService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.service.getPokemons(this.offset, this.limit).subscribe((data) => {
      data.results.forEach((element, index) => {
        this.pokemons.push(
          new Pokemon((index+1).toString(), element.name, element.url)
        );
      });
    });
  }

  viewPokemonDetails(pokemon:Pokemon): void {
    this.service.getPokemonInfo(pokemon.name).subscribe(data => this.currentPokemon = data);
    this.shareDetail.sendPokemon(pokemon.name);
  }
}


