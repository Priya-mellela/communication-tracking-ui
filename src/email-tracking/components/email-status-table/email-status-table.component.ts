import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailTrackingService } from '../../service/email-tracking.service';
import { EmailStatusDetail } from '../../model/email-status-detail.model';
import { FetchStatusRequest } from '../../model/fetch-status-request.model';

@Component({
  selector: 'app-email-status-table',
  templateUrl: './email-status-table.component.html',
  styleUrls: ['./email-status-table.component.scss'],
})
export class EmailStatusTableComponent {
  @Input() emailStatusDetailsList: EmailStatusDetail[] = [];
  @Output() fetchStatusRequestSubmitted: EventEmitter<{
    emailStatusDetail: EmailStatusDetail;
    statusSource: string;
  }> = new EventEmitter<{
    emailStatusDetail: EmailStatusDetail;
    statusSource: string;
  }>();

  displayedColumns: string[] = [
    'batchId',
    'accountId',
    'scheduledDate',
    'mailFrom',
    'messageGuid',
    'emailStatus',
    'emailStatusDetail',
    'sfmcStatus',
    'sfmcStatusDetail',
  ];

  fetchStatus(
    statusSource: string,
    emailStatusDetail: EmailStatusDetail
  ): void {
    this.fetchStatusRequestSubmitted.emit({
      emailStatusDetail,
      statusSource,
    });
  }
}
