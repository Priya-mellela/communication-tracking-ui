import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTrackingContainerComponent } from './email-tracking-container.component';

describe('EmailTrackingContainerComponent', () => {
  let component: EmailTrackingContainerComponent;
  let fixture: ComponentFixture<EmailTrackingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailTrackingContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailTrackingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
