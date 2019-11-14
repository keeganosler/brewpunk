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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.onGetAllBeers().subscribe(
      (res:any) => {
        console.log(res)
        this.allBeers = res
        this.beersToDisplay = res
      }
    )    
  }

  toggleABV(e) {
    this.httpService.onToggleBeers('abv_gt', 'abv_lt', e.value-0.25, e.value+0.25).subscribe(
      (res:any) => {
        this.beersToDisplayABV = res
      }
    )
    console.log(this.beersToDisplayABV)
  }

  toggleIBU(e) {
    console.log('ibu', e)
    this.httpService.onToggleBeers('ibu_gt', 'ibu_lt', e.value-0.25, e.value+0.25).subscribe(
      (res:any) => {
        this.beersToDisplayIBU = res
      }
    )
    console.log(this.beersToDisplayIBU)
  }

  toggleEBC(e) {
    console.log('ebc', e)
    this.httpService.onToggleBeers('ebc_gt', 'ebc_lt', e.value-0.25, e.value+0.25).subscribe(
      (res:any) => {
        this.beersToDisplayEBC = res
      }
    )
    console.log(this.beersToDisplayEBC)
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
  }

}
