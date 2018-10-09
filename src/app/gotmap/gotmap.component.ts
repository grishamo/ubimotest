import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdDispatcher } from 'ubimo-fed-home-assigment';

@Component({
  selector: 'app-gotmap',
  templateUrl: './gotmap.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./gotmap.component.scss'],
})
export class GotmapComponent implements OnInit {

  currentAdTime = 5000; // Ad duration
  currentAds: Array<{coordinates: object, creative: object, type: string}> = [];

  constructor(adDispatcher: AdDispatcher) {
    adDispatcher.registerToAdEvents((ad) => this.adDispatcherCallback(ad));
  }


  ngOnInit() {
  }

  adDispatcherCallback(ad) {
    console.log('adDispatcherCallback');
    console.dir(ad);

    this.currentAds.push(ad);
  }

  // Scroll ads container element to current ad
  scrollContainerTo(val) {
    const container = document.getElementById('gotmap-container');
    container.scrollTop = val;
  }

  // Execute method when ad is loaded
  adLoaded(ad) {
    this.scrollContainerTo(ad.coordinates.y);

    setTimeout(() => {
      const index = this.currentAds.indexOf(ad);

      if (index !== -1) {
        this.currentAds.splice(index, 1);
      }
    }, this.currentAdTime);
  }

}
