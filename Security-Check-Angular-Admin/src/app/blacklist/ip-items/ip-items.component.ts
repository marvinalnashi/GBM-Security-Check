import {Component, Input, OnInit} from '@angular/core';
import {IPBlacklist} from "@prisma/client";

@Component({
  selector: 'app-ip-items',
  templateUrl: './ip-items.component.html',
  styleUrls: ['./ip-items.component.css']
})
export class IPItemsComponent implements OnInit {
  @Input("IPAddresses")
  IPAddresses?: IPBlacklist;
  constructor() { }

  ngOnInit(): void {
  }

}
