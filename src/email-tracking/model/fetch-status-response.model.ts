export interface FetchStatusDetail {
  statusSource: string;
  status: string;
  statusDetail: string;
}

export interface FetchStatusResponse {
  statusDetails: FetchStatusDetail;
  errorMessage?: string;
}
