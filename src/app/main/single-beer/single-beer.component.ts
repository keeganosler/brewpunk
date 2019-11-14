import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.css']
})
export class SingleBeerComponent implements OnInit {

  @Input() name: string
  @Input() tagline: string
  @Input() img: string
  @Input() description: string
  @Input() brewersTips: string

  constructor() { }

  ngOnInit() {
  }

}
