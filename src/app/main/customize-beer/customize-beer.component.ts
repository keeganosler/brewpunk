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
  beersABV = []
  beersIBU = []
  beersEBC = []
  beersMalt = []
  beersHops = []
  beerSelected
  currentBeer
  beerClicked = false

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
    this.httpService.onToggleBeers('abv_gt', 'abv_lt', e.value-1, e.value+1).subscribe(
      (res:any) => {
        this.beersABV = res
      }
    )
  }

  toggleIBU(e) {
    this.httpService.onToggleBeers('ibu_gt', 'ibu_lt', e.value-10, e.value+10).subscribe(
      (res:any) => {
        this.beersIBU = res
      }
    )
  }

  toggleEBC(e) {
    this.httpService.onToggleBeers('ebc_gt', 'ebc_lt', e.value-10, e.value+10).subscribe(
      (res:any) => {
        this.beersEBC = res
      }
    )
  }

  toggleMalt(e) {

  }

  toggleHops(e) {

  }

  onCreateCustomBeer() {
    var arrays = this.beersABV.concat(this.beersEBC, this.beersIBU)
    var sortedArrays = arrays.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} )
    for(var i=0; i<sortedArrays.length-2; i++) {
      if((sortedArrays[i].id === sortedArrays[i+1].id) && (sortedArrays[i].id === sortedArrays[i+2].id)) {
        this.beersToDisplay.push(sortedArrays[i])
      }
    }
  }

  onSelectABeer(e) {
    this.beerSelected = e.target.textContent
    for(var b of this.beersToDisplay) {
      if(b.name === e.target.textContent) {
        this.beerClicked = true
        this.currentBeer = b
      }
    }
  }

}
