import { EmailStatusDetail } from './email-status-detail.model';

export interface EmailTrackingResponse {
  result: EmailStatusDetail[];
  errorMessage: string;
}
