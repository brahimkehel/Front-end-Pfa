import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeanceComponent } from './form-seance.component';

describe('FormSeanceComponent', () => {
  let component: FormSeanceComponent;
  let fixture: ComponentFixture<FormSeanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSeanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
