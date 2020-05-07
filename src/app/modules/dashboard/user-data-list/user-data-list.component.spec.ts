import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataListComponent } from './user-data-list.component';

describe('UserDataListComponent', () => {
  let component: UserDataListComponent;
  let fixture: ComponentFixture<UserDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
