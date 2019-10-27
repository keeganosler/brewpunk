import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ng on init works!')
  }

  onRefresh() {
    console.log("on refresh works!")
  }

}
