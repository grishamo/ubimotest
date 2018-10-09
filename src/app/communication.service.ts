import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  @Output() adClick: EventEmitter<any> = new EventEmitter();

  displayAd(ad) {
    this.adClick.emit(ad);
  }
}
