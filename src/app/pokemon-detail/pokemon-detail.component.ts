import { Component, Input } from '@angular/core';
import { Pokemon, PokemonDetail } from '../pokemon';
import { ShareDetailService } from '../share-detail.service';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

	@Input('detail')
	pokemon!: PokemonDetail;

	constructor(private shareDetail: ShareDetailService) {
		this.shareDetail.getObservable().subscribe(e => console.log(e));
	}


	ngOnInit(): void {
	}

}
