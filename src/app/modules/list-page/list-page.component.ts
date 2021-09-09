import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../shared/employees.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  numTab: number = 0

  constructor(
    private employees: EmployeesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (params: Params) => {
      this.numTab = params.tab
    })
  }

}
