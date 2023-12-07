import {Component, Input, OnInit} from '@angular/core';
import {HostnameBlacklist} from "@prisma/client";

@Component({
  selector: 'app-url-items',
  templateUrl: './url-items.component.html',
  styleUrls: ['./url-items.component.css']
})
export class URLItemsComponent implements OnInit {
  @Input("Hostnames")
  Hostnames?: HostnameBlacklist;
  constructor() { }

  ngOnInit(): void {

  }

}
