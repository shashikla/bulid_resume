import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getUserDetailsUrl = "http://localhost:3000/users";


  getAllData() : Observable<any>{
    return this.http.get(this.getUserDetailsUrl);
  }


  getDataByUser(name:any): Observable<any>{
    return this.http.get(`http://localhost:3000/users/name/${name}`);
  }
}
