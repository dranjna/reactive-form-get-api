import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private _url: string="https://dummy.restapiexample.com/api/v1/employees";

  constructor(private http:HttpClient) { }
  
  usermethod(){
    return 'welcome to services';
  }
 getEmployee(){
   return this.http.get(this._url);
   //return "ddd"
 }
}
