import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";
import {User} from "@prisma/client";

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  emails: string[] = [];
  User: User[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getEmails().subscribe((list) => {
      this.User = list
      this.emails = list.map((item) => {
        return item.email
      })
    })
  }

}
