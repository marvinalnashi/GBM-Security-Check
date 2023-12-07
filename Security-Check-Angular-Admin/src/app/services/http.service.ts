import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User, IPBlacklist, HostnameBlacklist} from "@prisma/client";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  IPBlackList: IPBlacklist[] = [];
  HostnameBlacklist: HostnameBlacklist[] = [];
  User: User[] = [];
  constructor(private http: HttpClient) { }

  getIPAddresses() {
    return this.http.get<IPBlacklist[]>(environment.adminAPIURL + '/api/iplist')
  }

  getHostnames() {
    return this.http.get<HostnameBlacklist[]>(environment.adminAPIURL + '/api/hostnames')
  }

  getEmails(){
    return this.http.get<User[]>(environment.adminAPIURL + '/api/emails')
  }
}
