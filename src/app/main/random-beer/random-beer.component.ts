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
  randomBeerName
  randomBeerTagline
  randomBeerImg
  randomBeerDesc
  randomBeerBrewersTips

  randomBeer

  constructor(private httpService: HttpService, private toSingleBeerService: ToSingleBeerService) { }

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh() {
    this.httpService.onGetRandomBeer().subscribe(
      (res: any) => {
        console.log(res)
        this.randomBeerIsLoaded = true
        this.randomBeerName = res[0].name
        this.randomBeerTagline = res[0].tagline
        this.randomBeerImg = res[0].image_url
        this.randomBeerDesc = res[0].description
        this.randomBeerBrewersTips = res[0].brewers_tips
        this.randomBeer = res[0]
        console.log(this.randomBeerImg)
      }
    )
  }

}
