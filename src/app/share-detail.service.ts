import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShareDetailService {

  private pokemonSubject = new Subject<string>();

  sendPokemon(pokemon: string) {
    this.pokemonSubject.next(pokemon);
  }

  getObservable(): Subject<string> {
    return this.pokemonSubject;
  }

}
