import { Component } from '@angular/core';
import { EmailTrackingService } from '../../service/email-tracking.service';
import { EmailStatusDetail } from '../../model/email-status-detail.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';
import { FetchStatusRequest } from '../../model/fetch-status-request.model';

@Component({
  selector: 'app-email-tracking-container',
  templateUrl: './email-tracking-container.component.html',
  styleUrls: ['./email-tracking-container.component.scss'],
})
export class EmailTrackingContainerComponent {
  emailStatusDetails: EmailStatusDetail[] = [];
  errorMessage: string = '';
  private _snackBar = inject(MatSnackBar);
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  constructor(private emailTrackingService: EmailTrackingService) {}

  handleFormSubmission(formData: any) {
    this.emailStatusDetails = [];
    this.emailTrackingService.submitEmailTrackingForm(formData).subscribe(
      (response) => {
        console.log(response);
        this.emailStatusDetails = response.result;
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.errorMessage;
        this._snackBar.open(this.errorMessage, '', {
          duration: 2000,
        });
      }
    );
  }

  handleFetchStatusRequest(details: {
    emailStatusDetail: EmailStatusDetail;
    statusSource: string;
  }): void {
    const fetchStatusRequest: FetchStatusRequest = {
      ateMailRecordId: details.emailStatusDetail.ateMailRecordId,
      statusSource: details.statusSource,
      batchId: details.emailStatusDetail.batchId,
    };
    this.emailTrackingService.fetchStatusRequest(fetchStatusRequest).subscribe(
      (response) => {
        if (details.statusSource == 'sfmc') {
          details.emailStatusDetail.sfmcStatus = response.statusDetails.status;
          details.emailStatusDetail.sfmcStatusDetail =
            response.statusDetails.statusDetail;
        }
        if (details.statusSource == 'email') {
          details.emailStatusDetail.emailStatus = response.statusDetails.status;
          details.emailStatusDetail.emailStatusDetail =
            response.statusDetails.statusDetail;
        }
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.errorMessage;
        this._snackBar.open(this.errorMessage, '', {
          duration: 2000,
        });
      }
    );
  }
}
