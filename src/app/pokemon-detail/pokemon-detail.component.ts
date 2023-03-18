import { Component, Input } from '@angular/core';
import { PokemonDetail } from '../pokemon';
import { ShareDetailService } from '../share-detail.service';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
	
	@Input('detail')
	detail!: PokemonDetail;

	constructor(private shareDetail: ShareDetailService) {
		this.shareDetail.getObservable().subscribe(e => console.log('e ' + e));
	}


	ngOnInit(): void {
	}

}
