import { Component, OnInit, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { MywasteserviceService } from '../../../my-waste/mywasteservice.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-desegregated-grid',
  templateUrl: './desegregated-grid.component.html',
  styleUrls: ['./desegregated-grid.component.scss']
})
export class DesegregatedGridComponent implements OnInit {
  public range = { start: null, end: null };
  GridHeaderText: string = "Collected Waste";
  loading: boolean = false;
  public gridView: GridDataResult;
  source: LocalDataSource = new LocalDataSource();
  listViewModel: any[] = [];
  TypesWithWeightRecycle: any[] = [];
  public pageSize = 8;
  public skip = 0;
  public IsSegregated: boolean = false;
  public RecycleID: number;
  public ShowError : boolean = false;
  public ErrorMessage : string = "Select range*";
  @Output('childData') Data = new EventEmitter<Date>()

  private dataa: any;

  @Output('ShowHideChilds') IssSegregated = new EventEmitter<boolean>()
  @Output('childDataToShow') SegregatedData = new EventEmitter<any[]>()

  // @Output('passRecyleID') RecycleData = new EventEmitter<number>()

  @Output('passRecyleID') RecycleIDTo = new EventEmitter<number>()

  @Input() typeswithWeight: any[];


  constructor(private service: MywasteserviceService, private router: Router) { }

  ngOnInit() {
    this.reloadGrid();
  }

  async reloadGrid() {

    this.loading = true;
    var response = await this.service.GetDesegregatedList();
    if (response.statusCode == 0) {
      this.listViewModel = [];
      this.skip =0;
      this.listViewModel = response.data;
      this.loadItems();
    }
    this.loading = false

  }

  async loadFilteredData() {

    if(this.range.start == null || this.range.end == null)
    {
      this.ShowErrorMessage();
     this.ErrorMessage = "Please select date range*";
     return;
    }
    this.loading = true;
    var response = await this.service.GetDesegregatedListBetweenTwoDates(this.range);
    var responsedata = await this.service.GetSegregatedDataBetweenTwoDates(this.range);
    if (responsedata.statusCode == 0) {
      this.TypesWithWeightRecycle = response.data;
      console.log(this.TypesWithWeightRecycle)
    }
    if (response.statusCode == 0) {
      this.listViewModel = [];
      this.skip =0;
      this.listViewModel = response.data;
      this.loadItems();

    }

    this.loading = false
  }
  async ClearFilter() {
    console.log('clear button clicked')
   // this.range = []
    this.range = { start: null, end: null };
    this.reloadGrid();
  }

  async CheckDataSegregation(Id: number) {
    var response = await this.service.IsDataSegregated(Id);
    if (response.statusCode == 0) {
      return response.data;
    }
  }

  async LoadSegregatedData(Id: number) {
    var response = await this.service.GetSegregatedDataByID(Id);
    if (response.statusCode == 0) {
      //this.typeswithWeight = response.data;
      this.dataa = response.data;
      // console.log('Uff Hi this is Ihsan')
      // console.log(response.data)
    }
  }

  public async onSelect(e) {

    var result = this.CheckDataSegregation(this.gridView.data[e.index % this.pageSize].id);
    if (await result == true) {
      this.IssSegregated.emit(true);
      this.RecycleID = this.gridView.data[e.index % this.pageSize].id;
      this.RecycleIDTo.emit(this.RecycleID)
      // this.LoadSegregatedData(this.RecycleID)
      console.log(this.typeswithWeight)
      //this.RecycleData.emit(this.RecycleID)
      //console.log(this.RecycleData.emit(this.RecycleID))

      // this.SegregatedData.emit(await this.LoadSegregatedData(this.RecycleID));
      //  console.log('vvvvvvvvvvvvvvvvvvvvvvvvvv')
      //  console.log( this.SegregatedData.emit(await this.LoadSegregatedData(this.RecycleID)))

    }
    else {
      this.IssSegregated.emit(false);
      var response = await this.service.GetDesegregatedByID(this.gridView.data[e.index % this.pageSize].id);
      if (response.statusCode == 0) {
        debugger
        this.Data.emit(response.data);
        //this.collectDate = response.data.date;
        debugger
      }
      this.loading = false
    }
  }
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }
  public loadItems(): void {
    if (this.skip == this.listViewModel.length)
      this.skip = this.skip - this.pageSize;
    console.log(this.listViewModel);

    this.gridView = {
      data: this.listViewModel.slice(this.skip, this.skip + this.pageSize),
      total: this.listViewModel.length
    };

  }
  ShowErrorMessage(): void {
    //show box msg
    this.ShowError = true;
    //wait 3 Seconds and hide
    setTimeout(function() {
        this.ShowError = false;
    }.bind(this), 2500);
   }


}
