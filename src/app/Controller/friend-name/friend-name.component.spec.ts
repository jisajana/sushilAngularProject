import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendNameComponent } from './friend-name.component';

describe('FriendNameComponent', () => {
  let component: FriendNameComponent;
  let fixture: ComponentFixture<FriendNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
