import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-customize-beer',
  templateUrl: './customize-beer.component.html',
  styleUrls: ['./customize-beer.component.css']
})
export class CustomizeBeerComponent implements OnInit {

  allBeers = []
  beersToDisplay = []

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.onGetAllBeers().subscribe(
      (res:any) => {
        console.log(res)
        this.allBeers = res
      }
    )    
  }

  toggleABV(e) {
    console.log('event: ', e)
    this.beersToDisplay = []
    for(var beer of this.allBeers) {
      console.log(beer.abv)
      if(beer.abv<(e.value+0.25) && beer.abv >(e.value-0.25)){
        console.log('yes')
      }
    }
  }

  toggleIBU(e) {
    console.log('ibu', e)
  }

  toggleEBC(e) {
    console.log('ebc', e)
  }

  toggleHops(e) {
    console.log('hops', e)
  }

  toggleMalt(e) {
    console.log('malt', e)
  }

}
