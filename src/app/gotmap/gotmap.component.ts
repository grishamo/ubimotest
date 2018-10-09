import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AdDispatcher} from 'ubimo-fed-home-assigment';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-gotmap',
  templateUrl: './gotmap.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./gotmap.component.scss'],
})
export class GotmapComponent implements OnInit {

  currentAdTime = 5000; // Ad duration
  currentAds: Array<{ coordinates: object, creative: object, type: string }> = [];

  constructor(private adDispatcher: AdDispatcher,
              private communicationService: CommunicationService) {
  }


  ngOnInit() {
    this.adDispatcher.registerToAdEvents((ad) => this.adDispatcherCallback(ad));
    this.communicationService.adClick.subscribe(ad => this.adSelected(ad));
  }

  adSelected(ad) {
    if (ad.selected === false) {
      const index = this.currentAds.indexOf(ad);
      this.currentAds.splice(index, 1);
    } else {
      this.currentAds.push(ad);
      this.scrollContainerTo(ad.coordinates.y);
    }
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

    if (!ad.selected) {
      setTimeout(() => {
        const index = this.currentAds.indexOf(ad);

        if (index !== -1) {
          this.currentAds.splice(index, 1);
        }
      }, this.currentAdTime);
    }
  }

}
