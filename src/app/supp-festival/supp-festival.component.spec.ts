import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppFestivalComponent } from './supp-festival.component';

describe('SuppFestivalComponent', () => {
  let component: SuppFestivalComponent;
  let fixture: ComponentFixture<SuppFestivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppFestivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
