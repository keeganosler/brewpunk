import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-search-beers',
  templateUrl: './search-beers.component.html',
  styleUrls: ['./search-beers.component.css']
})
export class SearchBeersComponent implements OnInit {

  searchControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  beers: any

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.searchControl.valueChanges.pipe().subscribe(
      val => { this.onSearchBeers(val)}
    )
  }

  onSearchBeers(str) {
    this.httpService.onSearchBeers(str).subscribe(
      res => {
        console.log(res)
        this.beers = res
      }
    )
  }

}
