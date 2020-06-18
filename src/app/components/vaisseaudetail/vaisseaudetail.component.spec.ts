import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseaudetailComponent } from './vaisseaudetail.component';

describe('VaisseaudetailComponent', () => {
  let component: VaisseaudetailComponent;
  let fixture: ComponentFixture<VaisseaudetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaisseaudetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseaudetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
