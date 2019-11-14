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

  constructor(private httpService: HttpService, private toSingleBeerService: ToSingleBeerService) { }

  ngOnInit() {
  }

  onRefresh() {
    this.httpService.onGetRandomBeer().subscribe(
      (res: any) => {
        this.randomBeerIsLoaded = true
        this.randomBeerName = res[0].name
        console.log(this.randomBeerName)
        this.randomBeerTagline = res[0].tagline
      }
    )
  }

}
