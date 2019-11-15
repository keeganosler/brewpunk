import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ToSingleBeerService } from '../services/to-single-beer.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {

  randomBeerIsLoaded = false

  randomBeer

  constructor(private httpService: HttpService, private toSingleBeerService: ToSingleBeerService) { }

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh() {
    this.httpService.onGetRandomBeer().subscribe(
      (res: any) => {
        this.randomBeerIsLoaded = true
        this.randomBeer = res[0]
      }
    )
  }

}
