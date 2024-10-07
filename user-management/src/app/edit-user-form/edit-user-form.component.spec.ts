import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditComponent } from './edit-user-form.component';

describe('EditUserFormComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditComponent]
    });
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
