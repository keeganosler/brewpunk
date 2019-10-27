import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log('ng on init works!')
  }

  onRefresh() {
    this.httpService.onGetRandomBeer().subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
