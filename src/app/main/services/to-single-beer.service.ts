import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToSingleBeerService {

  @Output() beerSelected: EventEmitter<any> = new EventEmitter()
  currentBeer

  constructor() { }

  emitBeer(beer) {
    this.currentBeer = beer
    this.beerSelected.emit(this.currentBeer)
  }
}
