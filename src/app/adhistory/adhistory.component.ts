import {Component, HostListener, OnInit} from '@angular/core';
import {AdDispatcher} from 'ubimo-fed-home-assigment';
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-adhistory',
  templateUrl: './adhistory.component.html',
  styleUrls: ['./adhistory.component.scss']
})

export class AdhistoryComponent implements OnInit {
  // data = {coordinates: object, creative: object, type: string}
  allAds: Array<{ date: Date, data: any }> = [];
  filteredItems: Array<{ date: Date, data: any }> = [];
  startDate = '';
  endDate = '';

  constructor(private adDispatcher: AdDispatcher,
              private communicationService: CommunicationService) {}

  ngOnInit() {
    this.adDispatcher.registerToAdEvents((ad) => this.adDispatcherCallback(ad));
  }

  adClick(ad) {
    ad.selected = !ad.selected;
    this.communicationService.displayAd(ad);
  }

  adDispatcherCallback(data) {
    const date = new Date();
    // const time = this.pipe.transform(currDate, 'mediumTime');
    this.allAds.unshift({date, data});

    // Check if filter applied
    if (this.isFilterOn()) {
      this.filterItems();
    } else {
      this.assignCopy();
    }
  }

  // ===============================================================
  // Filter Ad List
  // ===============================================================

  isFilterOn() {
    return this.startDate.length > 0 || this.endDate.length > 0;
  }

  filterItems() {
    // Filter ad list
    this.filteredItems = Object.assign([], this.allAds).filter(
      ad => this.isAdMatch(ad)
    );
  }

  isAdMatch(ad) {
    const adDate = ad.date;
    const startDate = this.createDateFromTime(this.startDate);
    const endDate = this.createDateFromTime(this.endDate);
    const adIsAfterStar = startDate ? adDate >= startDate : false;
    const adIsBeforeEnd = endDate ? adDate <= endDate : false;
    let dateIsValid = false;

    if (startDate) {
      if (endDate) {
        dateIsValid = adIsAfterStar && adIsBeforeEnd;
      } else {
        dateIsValid = adIsAfterStar;
      }
    } else if (endDate) {
      dateIsValid = adIsBeforeEnd;
    } else {
      dateIsValid = true; // display all list
    }

    return dateIsValid;
  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.allAds);
  }

  createDateFromTime(date) {
    if (date.length === 0) {
      return null;
    }
    const tempTime = date.split(':');
    const dt = new Date();
    dt.setHours(tempTime[0]);
    dt.setMinutes(tempTime[1]);
    dt.setSeconds(tempTime[2]);

    return dt;
  }

  formatAMPM(date) {
    let seconds = date.getSeconds();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  }
}
