import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() selectedBeer = new EventEmitter<boolean>()

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
    for(var b of this.beers) {
      if(b.name = e.option.value) {
        this.selectedBeer.emit(this.beerSelected)
        this.beer = b
      }
    }
  }

}
