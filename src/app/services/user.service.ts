import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
const baseUrl = 'http://127.0.0.1:3003';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName = '未登录';
  constructor(readonly http: HttpClient) { }
  getusername(): string {
    return this.userName;
  }
  setUserName(e: string): void {
    this.userName = e;
  }
  async getUserInfo(): Promise<any>{
    return this.http.get(`${baseUrl}/api/info`).toPromise();
  }
  async userLogin(data: {name: string, psd: string}): Promise<any>{
    return this.http.post(`${baseUrl}/api/login`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise();
  }
}
