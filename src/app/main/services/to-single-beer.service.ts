import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToSingleBeerService {

  @Output() beerSelected = new EventEmitter()
  currentBeer

  constructor() { }

  emitBeer(beer) {
    console.log('service: ', beer)
    this.currentBeer = beer
    this.beerSelected.emit(this.currentBeer)
    console.log('beer1: ', this.currentBeer)
  }
}
