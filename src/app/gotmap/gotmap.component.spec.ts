import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotmapComponent } from './gotmap.component';

describe('GotmapComponent', () => {
  let component: GotmapComponent;
  let fixture: ComponentFixture<GotmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
