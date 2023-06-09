import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonServiceRes } from './pokemon';

@Injectable({
	providedIn: 'root'
})
export class PokeAPIService {

	private url: string = "https://pokeapi.co/api/v2/pokemon/";

	constructor(private http: HttpClient) { }

	getPokemons(offset: number, limit: number): Observable<PokemonServiceRes> {
		return this.http.get<PokemonServiceRes>(this.url+"?offset="+offset+"&limit="+limit);
	}

	getPokemonInfo(id: string): Observable<PokemonDetail> {
		return this.http.get<PokemonDetail>(this.url + id + '/');
	}

}
