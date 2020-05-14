import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnseignantUpdateComponent } from './form-enseignant-update.component';

describe('FormEnseignantUpdateComponent', () => {
  let component: FormEnseignantUpdateComponent;
  let fixture: ComponentFixture<FormEnseignantUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnseignantUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnseignantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
