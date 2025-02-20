import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://blogtai.herokuapp.com';

  constructor(private http: HttpClient) {

  }


  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get(this.url + '/api/posts/');

  }

  // tslint:disable-next-line:typedef
  getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
  }

  // tslint:disable-next-line:typedef
  getByText(data: { text: unknown }) {
    return this.http.post(this.url + '/api/posts/', data);
  }




}
