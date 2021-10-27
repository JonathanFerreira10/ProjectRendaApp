import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionAPIService {


  connectionAPI = 'http://127.0.0.1:5000/totalvalue'
  connectionAPI2 = 'http://127.0.0.1:5000/receivevalue'
  connectionAPI3 = 'http://127.0.0.1:5000/alou'


  constructor(private http: HttpClient) { }

  public get():Observable<any>{
    return this.http.get(this.connectionAPI)
  }

  public post(data){
    return this.http.post(this.connectionAPI2, data)
  }
}