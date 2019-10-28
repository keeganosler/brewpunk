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
  randomBeer: any[]

  constructor(private httpService: HttpService, private toSingleBeer: ToSingleBeerService) { }

  ngOnInit() {
  }

  onRefresh() {
    this.httpService.onGetRandomBeer().subscribe(
      res => {
        this.randomBeerIsLoaded = true
        this.randomBeer = res[0]
        this.toSingleBeer.emitBeer(this.randomBeer)
        console.log(res)
      }
    )
  }

}
