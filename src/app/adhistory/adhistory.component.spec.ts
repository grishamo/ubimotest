import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhistoryComponent } from './adhistory.component';

describe('AdhistoryComponent', () => {
  let component: AdhistoryComponent;
  let fixture: ComponentFixture<AdhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
