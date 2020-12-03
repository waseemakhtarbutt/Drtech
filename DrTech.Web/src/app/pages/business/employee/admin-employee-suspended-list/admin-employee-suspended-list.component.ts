import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../../service/business-service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { compileFilter, CompositeFilterDescriptor, filterBy, SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'ngx-admin-employee-suspended-list',
  templateUrl: './admin-employee-suspended-list.component.html',
  styleUrls: ['./admin-employee-suspended-list.component.scss']
})
export class AdminEmployeeSuspendedListComponent implements OnInit {
  listViewModel: any[] = [];
  loading=false;
  public employId = 0;

  public gridView: GridDataResult;
  public pageSize = 8;
  public skip = 0;
  public filter: CompositeFilterDescriptor;
  public employeeName:string = "";
  public sort: SortDescriptor[] = [{
    field: 'name',
    dir: 'asc'
  }];
  public multiple = false;
  public allowUnsort = true;
  constructor(public businessService: BusinessService, protected route: ActivatedRoute, protected router: Router, private dialogService: NbDialogService) { }

  async ngOnInit() {
    this.LoadData();
  }

  LoadData() {
    this.loading = true;

    this.businessService.GetEmployListByRole(true).subscribe(result => {
      if (result.statusCode == 0) {
        this.listViewModel = result.data;

        this.loadItems();
      }
    });

    this.loading = false
  }

  private loadItems(): void {
    if(this.skip == this.listViewModel.length)
        this.skip = this.skip - this.pageSize;
    this.gridView = {
        data: orderBy(this.listViewModel.slice(this.skip, this.skip + this.pageSize),this.sort),
        total: this.listViewModel.length
    };
  }
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadItems();
}
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  async ActivateEmployee(dialog: NbDialogRef<any>) {
    console.log(dialog)
    var response = await this.businessService.ActivateEmployee(this.employId);

    if (response.statusCode == 0) {
      dialog.close();
      this.LoadData();
    }
  }

  onComplaintAction(dialog: TemplateRef<any>, event: any, id: any) {
    this.employeeName = this.listViewModel.find(x=>x.id==id).name;

    const dialogRef = this.dialogService.open(
      dialog,
      {
        context: event.data,
        closeOnBackdropClick: false,
        closeOnEsc: false,
      });

      this.employId = id;
  }

  searchGrid(search) {
    const predicate = compileFilter(
      { logic: "or",
       filters: [
        { field: "name", operator: "contains", value: search },
        { field: "businessname", operator: "contains", value: search},
        { field: "department", operator: "contains", value: search},
        { field: "designation", operator: "contains", value: search},
        { field: "role", operator: "contains", value: search},
        { field: "suboffice", operator: "contains", value: search},
        { field: "contactno", operator: "contains", value: search},
        ]});

        if(search)
        {
          this.gridView = {
            data: this.listViewModel.filter(predicate),
             total: this.listViewModel.length
         };
        }
        else
        {
          this.gridView = {
            data: this.listViewModel.filter(predicate).slice(this.skip, this.skip + this.pageSize),
             total: this.listViewModel.length
         };
        }
  }
  public filterChange(filter: CompositeFilterDescriptor): void {
    this.filter = filter;
    this.gridView = {
        data: filterBy(this.listViewModel, filter),
        total: this.listViewModel.length
    };
  }
}
