import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-search-beers',
  templateUrl: './search-beers.component.html',
  styleUrls: ['./search-beers.component.css']
})
export class SearchBeersComponent implements OnInit {

  searchControl = new FormControl()
  beers: any
  beerSelected = false
  beer

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.searchControl.valueChanges.pipe().subscribe(
      val => { this.onSearchBeers(val)}
    )
  }

  onSearchBeers(str) {
    this.httpService.onSearchBeers(str).subscribe(
      res => {
        this.beers = res
      }
    )
  }

  onSelectionChange(e) {
    this.beerSelected = true
    this.beer = e.option.value
  }

}
