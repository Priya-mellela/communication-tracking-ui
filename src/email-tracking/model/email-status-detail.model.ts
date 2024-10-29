export interface EmailStatusDetail {
  messageGuid: string;
  batchId: string;
  mailFrom: string;
  accountId: number;
  emailStatus: string;
  emailStatusDetail: string;
  sfmcStatus: string;
  sfmcStatusDetail: string;
  scheduledDate: string;
  ateMailRecordId: number;
}
