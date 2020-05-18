import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAffectationComponent } from './form-affectation.component';

describe('FormAffectationComponent', () => {
  let component: FormAffectationComponent;
  let fixture: ComponentFixture<FormAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
