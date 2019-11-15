import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-customize-beer',
  templateUrl: './customize-beer.component.html',
  styleUrls: ['./customize-beer.component.css']
})
export class CustomizeBeerComponent implements OnInit {

  allBeers = []
  beersToDisplay = []
  beersToDisplayABV = []
  beersToDisplayIBU = []
  beersToDisplayEBC = []
  beersToDisplayHops = []
  beersToDisplayMalt = []
  abv
  ebc
  ibu
  beerSelected
  currentBeer
  beerClicked = false

  @Output() clickedBeer = new EventEmitter<boolean>()

  //options = ['one', 'two', 'three']

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.onGetAllBeers().subscribe(
      (res:any) => {
        console.log(res)
        this.allBeers = res
      }
    )    
  }

  onClick(e) {
    this.clickedBeer.emit(true)
    this.beerSelected = e.target.textContent
    for(var b of this.beersToDisplay) {
      console.log(b.name)
      if(b.name === e.target.textContent) {
        this.beerClicked = true
        this.currentBeer = b
      }
    }
    console.log('click', this.currentBeer)
  }

  toggleABV(e) {
    this.httpService.onToggleBeers('abv_gt', 'abv_lt', e.value-1, e.value+1).subscribe(
      (res:any) => {
        this.beersToDisplayABV = res
      }
    )
    console.log('abv', e.value)
  }

  toggleIBU(e) {
    this.httpService.onToggleBeers('ibu_gt', 'ibu_lt', e.value-10, e.value+10).subscribe(
      (res:any) => {
        console.log(res)
        this.beersToDisplayIBU = res
      }
    )
    console.log('ibu', e.value)
  }

  toggleEBC(e) {
    this.httpService.onToggleBeers('ebc_gt', 'ebc_lt', e.value-10, e.value+10).subscribe(
      (res:any) => {
        this.beersToDisplayEBC = res
      }
    )
    console.log('ebc', e.value)
  }

  toggleHops(e) {
    for(var beer of this.allBeers) {
      var hops = beer.ingredients.hops
      var amountHops = 0
      for(var hop of hops) {
        amountHops = amountHops + hop.amount.value
      }
      if(amountHops<(e.value+1) && amountHops>(e.value-1)){
        this.beersToDisplayHops.push(beer)
      }
    }
    console.log('hops', e.value)
  }

  toggleMalt(e) {
    for(var beer of this.allBeers) {
      var malts = beer.ingredients.malt
      var amountMalt = 0
      for(var malt of malts) {
        amountMalt = amountMalt + malt.amount.value
        
      }
      if(amountMalt<(e.value+1) && amountMalt>(e.value-1)){
        this.beersToDisplayMalt.push(beer)
      }
    }
    console.log('malt', e.value)
  }

  onCreate() {
    console.log('abv', this.beersToDisplayABV)
    console.log('ibu', this.beersToDisplayIBU)
    console.log('ebc', this.beersToDisplayEBC)
    var arrays = this.beersToDisplayABV.concat(this.beersToDisplayEBC, this.beersToDisplayIBU)
    console.log('arrays', arrays)
    var sortedArrays = arrays.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} )
    console.log('sorted arrays', sortedArrays)
    for(var i=0; i<sortedArrays.length-2; i++) {
      if((sortedArrays[i].id === sortedArrays[i+1].id) && (sortedArrays[i].id === sortedArrays[i+2].id)) {
        if(!this.beersToDisplay.includes(sortedArrays[i])) {
          this.beersToDisplay.push(sortedArrays[i])
        }
        
      }
    }
    console.log(this.beersToDisplay)
  }

}
