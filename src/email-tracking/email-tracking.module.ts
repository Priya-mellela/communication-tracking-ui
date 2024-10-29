import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { EmailTrackingFormComponent } from './components/email-tracking-form/email-tracking-form.component';
import { EmailStatusTableComponent } from './components/email-status-table/email-status-table.component';
import { EmailTrackingContainerComponent } from './components/email-tracking-container/email-tracking-container.component';
import { EmailTrackingRoutingModule } from './email-tracking-routing.module';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [
    EmailTrackingFormComponent,
    EmailStatusTableComponent,
    EmailTrackingContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    EmailTrackingRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class EmailTrackingModule {}
