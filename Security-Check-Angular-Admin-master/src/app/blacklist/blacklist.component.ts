import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";
import {IPBlacklist, HostnameBlacklist} from "@prisma/client";

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {
  IPBlackList: IPBlacklist[] = [];
  bannedIPs: string[] = [];
  HostnameBlacklist: HostnameBlacklist[] = [];
  bannedHostnames: string[] = [];
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.httpService.getIPAddresses().subscribe((list) => {
      this.IPBlackList = list
      this.bannedIPs = list.map((item) => {
        return item.ip
      })
    })
    this.httpService.getHostnames().subscribe((list) => {
      this.HostnameBlacklist = list
      this.bannedIPs = list.map((item) => {
        return item.hostname
      })
    })
  }
}
