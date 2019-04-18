import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFestivalComponent } from './ajout-festival.component';

describe('AjoutFestivalComponent', () => {
  let component: AjoutFestivalComponent;
  let fixture: ComponentFixture<AjoutFestivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutFestivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
