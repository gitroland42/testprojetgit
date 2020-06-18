import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanettedetailComponent } from './planettedetail.component';

describe('PlanettedetailComponent', () => {
  let component: PlanettedetailComponent;
  let fixture: ComponentFixture<PlanettedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanettedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanettedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
