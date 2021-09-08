import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../shared/employees.service";
import {CompanyNameInterface} from "../../shared/company-name.interface";

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  total: number = 0
  companies : Array<CompanyNameInterface> = []

  constructor(
    private tabs: EmployeesService
  ) { }

  ngOnInit(): void {
    this.count()
  }

  count(): void {
    this.total = this.tabs.employees.total

    this.companies = [
      { title: 'Income', count: this.tabs.employees.data.filter( arr => arr.type == 'income').length},
      { title: 'Investment', count: this.tabs.employees.data.filter( arr => arr.type == 'investment').length},
      { title: 'Outcome', count: this.tabs.employees.data.filter( arr => arr.type == 'outcome').length},
      { title: 'Loan', count: this.tabs.employees.data.filter( arr => arr.type == 'loan').length}
    ]
  }

}
