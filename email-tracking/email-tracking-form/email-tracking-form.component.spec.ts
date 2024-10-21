import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTrackingFormComponent } from './email-tracking-form.component';

describe('EmailTrackingFormComponent', () => {
  let component: EmailTrackingFormComponent;
  let fixture: ComponentFixture<EmailTrackingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailTrackingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailTrackingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
