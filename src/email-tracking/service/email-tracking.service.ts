import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailTrackingForm } from './../model/email-tracking-form.model';
import { EmailTrackingResponse } from '../model/email-tracking-response.model';
import { FetchStatusRequest } from '../model/fetch-status-request.model';
import { FetchStatusResponse } from '../model/fetch-status-response.model';

@Injectable({
  providedIn: 'root',
})
export class EmailTrackingService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  submitEmailTrackingForm(
    emailTrackingForm: EmailTrackingForm
  ): Observable<EmailTrackingResponse> {
    return this.httpClient.post<EmailTrackingResponse>(
      this.baseUrl + '/email-request',
      emailTrackingForm
    );
  }

  fetchStatusRequest(
    fetchStatusRequest: FetchStatusRequest
  ): Observable<FetchStatusResponse> {
    return this.httpClient.post<FetchStatusResponse>(
      this.baseUrl + '/fetch-status',
      fetchStatusRequest
    );
  }
}
