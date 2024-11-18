import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';

import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly ROUTE = "SuperHeros";

  formData: User = new User();

  list?: User[];

  constructor(private http: HttpClient) { }

  postSuperHero() {
    return this.http.post(`${env.BASE_URL}/${this.ROUTE}`, this.formData);
  }

  putSuperHero() {
    return this.http.put(`${env.BASE_URL}/${this.ROUTE}/${this.formData.id}`, this.formData);
  }

  deleteSuperHero(id: number) {
    return this.http.delete(`${env.BASE_URL}/${this.ROUTE}/${id}`);
  }

  refreshList() {
    this.http.get(`${env.BASE_URL}/${this.ROUTE}`)
      .toPromise()
      .then(res =>this.list = res as User[]);
  }
}
