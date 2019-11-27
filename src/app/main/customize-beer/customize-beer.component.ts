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

}
