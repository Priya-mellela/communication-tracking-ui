import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailTrackingForm } from './../../model/email-tracking-form.model';

@Component({
  selector: 'app-email-tracking-form',
  templateUrl: './email-tracking-form.component.html',
  styleUrls: ['./email-tracking-form.component.scss'],
})
export class EmailTrackingFormComponent {
  @Output() formSubmitted = new EventEmitter<EmailTrackingForm>();
  emailTrackingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailTrackingForm = this.fb.group({
      batchId: ['', Validators.required],
      accountId: ['', Validators.pattern('^[0-9]+$')],
    });
  }

  onSubmit() {
    if (this.emailTrackingForm.valid) {
      this.formSubmitted.emit(this.emailTrackingForm.value);
      this.emailTrackingForm.reset();
    }
  }
  onCancel() {
    this.emailTrackingForm.reset();
  }
}
