import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentTab
  tab0 = false
  tab2 = false

  constructor() { }

  ngOnInit() {
  }

  tabChanged(e) {
    console.log('tab change: ', e.index)
    this.currentTab = e.index
  }

  onSelected(e) {
    this.tab2 = e
    console.log('bigger: ', this.tab2)
  }

  onSelect2(e) {
    this.tab0 = e
    console.log('here: ', this.tab0)
  }

  get mapViewHeight() {
    if (this.currentTab === 2 && !this.tab2) {
      return `calc(100vh - 375.88px)`
    } else if (this.currentTab === 2 && this.tab2) {

    } else if (this.currentTab === 0 && !this.tab0) {
      return `calc(100vh - 375.88px)`
    } else if (this.currentTab === 0 && this.tab0) {

    } else if (this.currentTab === undefined && !this.tab0) {
      return `calc(100vh - 375.88px)`
    } else if (this.currentTab === undefined && this.tab0) {

    }
  }  

}
