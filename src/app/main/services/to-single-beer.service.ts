import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ToSingleBeerService {

  currentBeer

  @Output() beerSelected: EventEmitter<any[]> = new EventEmitter()
  
  constructor() { }

  sendBeer(beer) {
    console.log(typeof(beer))
    this.beerSelected.emit(beer)
  }
}
