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
  beersToDisplayABV = []
  beersToDisplayIBU = []
  beersToDisplayEBC = []
  beersToDisplayHops = []
  beersToDisplayMalt = []
  abv
  ebc
  ibu

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
    console.log(this.beersToDisplayABV)
    console.log(this.beersToDisplayIBU)
    console.log(this.beersToDisplayEBC)
    // for(var beer of this.allBeers) {
    //   if(this.beersToDisplayABV.includes(beer) && this.beersToDisplayIBU.includes(beer) && this.beersToDisplayEBC.includes(beer)) {
    //     this.beersToDisplay.push(beer)
    //   }
    // }
    var arrays = this.beersToDisplayABV.concat(this.beersToDisplayEBC, this.beersToDisplayIBU)
    console.log(arrays)
    var sortedArrays = arrays.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} )
    console.log(sortedArrays)
    for(var i=0; i<sortedArrays.length-2; i++) {
      if((sortedArrays[i].id === sortedArrays[i+1].id) && (sortedArrays[i].id === sortedArrays[i+2].id)) {
        this.beersToDisplay.push(sortedArrays[i])
      }
    }
    console.log(this.beersToDisplay)
  }

}
