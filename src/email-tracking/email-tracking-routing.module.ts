import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTrackingContainerComponent } from './components/email-tracking-container/email-tracking-container.component';

const routes: Routes = [
  { path: '', component: EmailTrackingContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailTrackingRoutingModule {}
