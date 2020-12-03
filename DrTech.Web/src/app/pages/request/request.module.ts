import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { RequestRoutingModule, routedComponents } from './request-routing.module';
import { RequestService } from './service/request-service';
import { CommonService } from '../../common/service/common-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../common/token.interceptor';
import { NbDialogModule } from '@nebular/theme';
import { GridModule } from '@progress/kendo-angular-grid';
import { RefuseRequestComponent } from './refuse-request/refuse-request.component';
import { ReuseRequestComponent } from './reuse-request/reuse-request.component';
import { ReduceRequestComponent } from './reduce-request/reduce-request.component';
import { ReportRequestComponent } from './report-request/report-request.component';
import { ReplantRequestComponent } from './replant-request/replant-request.component';
import { DashboardRequestComponent } from './dashboard-request/dashboard-request.component';

@NgModule({
  imports: [
    ThemeModule,
    RequestRoutingModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
    GridModule,
  ],
  providers: [RequestService, CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  declarations: [
    ...routedComponents,
    RefuseRequestComponent,
    ReuseRequestComponent,
    ReduceRequestComponent,
    ReportRequestComponent,
    ReplantRequestComponent,
    DashboardRequestComponent,
  ]
})
export class RequestModule { }
