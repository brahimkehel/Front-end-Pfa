import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldEtudiantComponent } from './hold-etudiant.component';

describe('HoldEtudiantComponent', () => {
  let component: HoldEtudiantComponent;
  let fixture: ComponentFixture<HoldEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
