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
  }

  onRefresh() {
    this.httpService.onGetRandomBeer().subscribe(
      res => {

        // console.log('random beer1', res)
        // this.randomBeer = res[0]
        // this.toSingleBeer.emitBeer(this.randomBeer)
        // this.randomBeerIsLoaded = true
        // console.log('random beer2:', this.randomBeer)
        //this.randomBeer = res[0]

        // this.toSingleBeerService.sendBeer(res)
        // this.randomBeerIsLoaded = true

        
      }
    )
  }

}
