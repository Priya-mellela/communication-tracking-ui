import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStatusTableComponent } from './email-status-table.component';

describe('EmailStatusTableComponent', () => {
  let component: EmailStatusTableComponent;
  let fixture: ComponentFixture<EmailStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailStatusTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
