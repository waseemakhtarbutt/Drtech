import { Component, OnInit, TemplateRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { RequestService } from '../service/request-service';
import { CommonService } from '../../../common/service/common-service';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { RecycleDTO } from '../dto';
import { DropdownDTO } from '../../../common/dropdown-dto';
import { LocationLinkComponent, UserDetailLinkComponent } from '../../../common/custom-control';
import { ActivatedRoute, Router } from '@angular/router';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { compileFilter, SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'ngx-recycle-request',
  templateUrl: './recycle-request.component.html',
  styleUrls: ['./recycle-request.component.scss'],
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
    :host
    /deep/
    i.nb-compose:hover
    {
      background-color: #91C747 !important;
      border-radius: 50px;
      padding:3px 3px 3px 3px;
      color: #ffffff !important;
    }
    :host
    /deep/
    ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {
      display: inline-block;
      width: 35px;
      padding-top: 12px;
    }
  `],
})
export class RecycleRequestComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  userId: any;
  statusId: any;
  badge: any;
  points: number = 0;
  listViewModel: any[] = [];
  loading = false;

  public gridView: GridDataResult;
  public pageSize = 9;
  public skip = 0;
  // public sort: SortDescriptor[] = [{
  //   field: 'updatedDate',
  //   dir: 'desc'
  // }];
  public multiple = false;
  public allowUnsort = true;
  statusList: Array<DropdownDTO> = new Array<DropdownDTO>();
  constructor(public requestService: RequestService, public commonService: CommonService, private dialogService: NbDialogService, private route: ActivatedRoute, private router: Router) {
    this.userId = route.snapshot.paramMap.get("id");
    this.statusId = 1;
  }

  ngOnInit() {
    this.LoadData();
    this.commonService.GetStatusList().subscribe(result => {
      this.statusList = result.data;

    });
  }

  LoadData() {
    this.loading = true;

    this.requestService.GetRecycleList(this.statusId).subscribe(result => {
      if (result.statusCode == 0) {
        this.listViewModel = result.data;
        this.loadItems();
        this.loading = false
      }
    });

    // this.loading = false
  }
  public onSelect(e) {
    this.router.navigate(["/pages/driver/assign-driver/recycle-assign/" + this.gridView.data[e.index % this.pageSize].id]);
  }
  public sortChange(sort: SortDescriptor[]): void {
    //  this.sort = sort;
    this.loadItems();
  }
  private loadItems(): void {
    if (this.skip == this.listViewModel.length)
      this.skip = this.skip - this.pageSize;
    this.gridView = {
      data: this.listViewModel.slice(this.skip, this.skip + this.pageSize),
      total: this.listViewModel.length
    };
    if (this.listViewModel) {
      this.badge = this.listViewModel.length;
    }
    else
      this.badge = '';
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  searchGrid(search) {

    const predicate = compileFilter(
      {
        logic: "or",
        filters: [
          { field: "idea", operator: "contains", value: search },
          { field: "userName", operator: "contains", value: search },
          { field: "statusDescription", operator: "contains", value: search },
          { field: "cityName", operator: "contains", value: search }
        ]
      });

    if (search) {
      this.gridView = {
        data: this.listViewModel.filter(predicate),
        total: this.listViewModel.length
      };
    }
    else {
      this.gridView = {
        data: this.listViewModel.filter(predicate).slice(this.skip, this.skip + this.pageSize),
        total: this.listViewModel.length
      };
    }
  }
  public filterChanged(event: Event) {
    let selectElementText = event.target['value'];
    this.statusId = selectElementText;
    var datalist = this.requestService.GetReplantList(this.statusId).subscribe(result => {
      if (result.statusCode == 0) {
        //this.listViewModel=[];
        this.skip = 0;
        debugger
        this.listViewModel = result.data;
        this.loadItems();
      }
    });

  }
}
