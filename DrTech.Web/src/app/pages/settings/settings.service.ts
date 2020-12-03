import { Injectable } from '@angular/core';
import { BaseService } from '../../common/base.service';
import { HttpClient } from '@angular/common/http';
import { ResponseObject } from '../../common/response-object';
import { CommonService } from '../../common/service/common-service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SettingsService extends BaseService {

  constructor(public http: HttpClient) { super(http); }
  async GetGPNLevelById(Id): Promise<ResponseObject<any>> {
    return await this.Get<any>('Configuration/GetGPNLevelById?Id=' + Id);
  }
  async SaveGPNLevel(model): Promise<ResponseObject<any>> {
    return await this.Post<any>('Configuration/AddEditGPNLevel', model);
  }
  async UpdateWorkingHours(model): Promise<ResponseObject<any>> {
    return await this.Post<any>('Configuration/UpdateWorkingHours', model);
  }
  async GetGPNLevelsList(): Promise<ResponseObject<any>> {
    return await this.Get<any>('Configuration/GetGPNLevelsList');
  }
  async DeActivateLevel(Id): Promise<ResponseObject<any>> {
    return await this.Get<any>('Configuration/DeActivate?Id=' + Id);
  }
  async SaveDefaultGreenPoints(model): Promise<ResponseObject<any>> {
    return await this.Post<any>('Configuration/SaveDefaultGreenPoints', model);
  }
  async GetWorkingHoursList(): Promise<ResponseObject<any>> {
    return await this.Get<any>('Configuration/GetWorkingHoursList');
  }
  async GetDefaultGreenPointsList(): Promise<ResponseObject<any>> {
    return await this.Get<any>('Configuration/GetDefaultGreenPointsList');
  }
  async ChangePassword(model): Promise<ResponseObject<any>> {
    return await this.Post<any>('Users/ChangePassword', model);
  }
  GetAllAreas(): Observable<ResponseObject<Array<any>>> {
    const link = this.baseUrl + 'MyWaste/GetAllArea';
    return this.http.get<ResponseObject<Array<any>>>(link)
      .pipe(catchError(this.handleError));
  }
  GetAllAdTypes(): Observable<ResponseObject<Array<any>>> {
    const link = this.baseUrl + 'UserPayment/GetAdType';
    return this.http.get<ResponseObject<Array<any>>>(link)
      .pipe(catchError(this.handleError));
  }
  async SaveAD(file, model): Promise<ResponseObject<any>> {
    return await this.UploadData<any>(file, 'UserPayment/AddAdInformation', model);
  }
  async GetAdList(): Promise<ResponseObject<any>> {
    return await this.Get<any>('UserPayment/GetAdList');
  }
}






