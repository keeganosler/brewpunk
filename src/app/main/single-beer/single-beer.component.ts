import { Component, OnInit } from '@angular/core';
import { ToSingleBeerService } from '../services/to-single-beer.service';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.css']
})
export class SingleBeerComponent implements OnInit {

  name: string
  tagline: string

  constructor(private toSingleBeerService: ToSingleBeerService) { }

  ngOnInit() {
    console.log('ngonint')
    this.toSingleBeerService.beerSelected.subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
