import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplanetComponent } from './editplanet.component';

describe('EditplanetComponent', () => {
  let component: EditplanetComponent;
  let fixture: ComponentFixture<EditplanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditplanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
