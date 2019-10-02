import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { constant } from '../utilitis/constant';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  constant = new constant();
  api_url = this.constant.routeGlobal;

  constructor(private http: HttpClient) { }

  save_image(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/image`, params);
  }

  login(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/login`, params);
  }

  totalasignadas(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/totalasignadas`, params);
  }

  seach_asignadas(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/seach_asignadas`, params);
  }

  photos_service(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/photos_service`, params);
  }

  registerToken(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/registerToken`, params);
  }

  search_materials(): Observable<any> {
    return this.http.get(`${this.api_url}movil/search_materials`);
  }
  search_builder(): Observable<any> {
    return this.http.get(`${this.api_url}movil/search_builder`);
  }

  search_certificate(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/search_certificate`, params);
  }

  number(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/number`, params);
  }

  save_certificate(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/save_certificate`, params);
  }
  ViewImage(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/ViewImage`, params);
  }

  SaveService(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/SaveService`, params);
  }
  type_red(params): Observable<any> {
    return this.http.post(`${this.api_url}list/list_type_network`, params);
  }

  SaveCliente(params): Observable<any> {
    return this.http.post(`${this.api_url}client/create`, params);
  }

  ListClient(page): Observable<any> {
    return this.http.get(`${this.api_url}movil/ListClient?page=${page}`);


  }
}
