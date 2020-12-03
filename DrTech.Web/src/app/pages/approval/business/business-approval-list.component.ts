import { Component, OnInit, TemplateRef} from '@angular/core';
import { NbDialogService, NbDialogRef} from '@nebular/theme';
import { RegistrationRequestService } from '../../registration-request/service/registration-request-service';

@Component({
  selector: 'ngx-business-approval-list',
  templateUrl: './business-approval-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class BusinessApprovalListComponent implements OnInit {
  listViewModel: any[] = [];
  constructor(public requestService: RegistrationRequestService, private dialogService: NbDialogService) {}

  async ngOnInit() {
    const response = await this.requestService.GetBusinessApprovalList();
    if (response.statusCode === 0) {
      this.listViewModel = response.data;
    }
  }
  async updateStatus(data, ref: NbDialogRef<any>, status) {
    const response = await this.requestService.updateBusinessApprovalStatus(data.id, status);
    if (response.statusCode === 0)
      ref.close();

    this.ngOnInit();
  }
  open(dialog: TemplateRef<any>, event: any) {
    this.dialogService.open(
      dialog,
      {
        context: event,
        closeOnBackdropClick: false,
        closeOnEsc: false,
      });
  }
}
