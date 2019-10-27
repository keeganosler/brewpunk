import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {

  randomBeerIsLoaded = false

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onRefresh() {
    this.httpService.onGetRandomBeer().subscribe(
      res => {
        this.randomBeerIsLoaded = true
        console.log(res)
      }
    )
  }

}
