import { isDevMode } from "@angular/core";

export class CommonFunction {

  public static GetCurrentURLOrigin(): string {
   /////////// http://localhost:60889/api/values
   var baseUrl = 'http://localhost:64331/api/';
    //var baseUrl = 'http://10.200.10.33:9001/api/';

    // var baseUrl = 'https://amalforlife-android.azurewebsites.net/api/';

   // var baseUrl = 'https://amalforlife-android.azurewebsites.net/api/';

    //var baseUrl = 'http://amalforlifeqaservices.azurewebsites.net/api/';

    //console.log("Development Mode => " + isDevMode());
    //console.log("Current ULR => " + window.location.origin);
    //console.log("Current ULR Index of Local => " + window.location.origin.indexOf("localhost:4200"));

    // if (!isDevMode() || window.location.origin.indexOf("localhost:4200") < 0) {

    //var baseUrl = 'http://localhost:64331/api/';

     //var baseUrl = 'http://localhost:64331/api/';

    //   baseUrl = 'http://10.200.10.33:9001/api';
    // }
    // var baseUrl = 'http://10.200.10.33:8001/api/';

    if (isDevMode()) {
       //baseUrl = 'https://amalforlife-android.azurewebsites.net/api/';

    }
    return baseUrl;
  }
}
