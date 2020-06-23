import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvaisseauComponent } from './editvaisseau.component';

describe('EditvaisseauComponent', () => {
  let component: EditvaisseauComponent;
  let fixture: ComponentFixture<EditvaisseauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvaisseauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvaisseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
