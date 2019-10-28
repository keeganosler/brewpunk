import { Component, OnInit } from '@angular/core';
import { ToSingleBeerService } from '../services/to-single-beer.service';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.css']
})
export class SingleBeerComponent implements OnInit {

  name
  tagline

  constructor(private toSingleBeer: ToSingleBeerService) { }

  ngOnInit() {
    this.toSingleBeer.beerSelected.subscribe(
      res => {
        console.log('beer2: ', res)
      }
    )
  }

}
