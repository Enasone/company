import {Component, Input, OnInit} from '@angular/core';
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
    let data = this.tabs.employees.data
    // Сортировка и занесение уникальных данных из "type" в массив (['income', 'outcome'] и т.д)
    let nameTabs = data.map( arr => arr.type)
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort()

    // Общее кол-во транзакций
    this.total = this.tabs.employees.total

    for (let i = 0; i < nameTabs.length; i++) {
      this.companies.push({title: nameTabs[i], count: data.filter( arr => arr.type == nameTabs[i]).length})
    }


  }

}
