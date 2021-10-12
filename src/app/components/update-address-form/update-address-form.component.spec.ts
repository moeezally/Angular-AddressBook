import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddressFormComponent } from './update-address-form.component';

describe('UpdateAddressFormComponent', () => {
  let component: UpdateAddressFormComponent;
  let fixture: ComponentFixture<UpdateAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
