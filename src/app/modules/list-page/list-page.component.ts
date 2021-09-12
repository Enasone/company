import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../shared/employees.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  tabs: Array<string> = []
  infoWin: any

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Сортировка и занесение уникальных данных из "type" в массив (['income', 'outcome'] и т.д)
    this.tabs = this.employeesService.employees.data.map( arr => arr.type)
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort()

    // Подписка на отслеживание Query параметра в URL (если query параметр поменялся,
    // то вызывается данная конструкция)
    this.route.queryParams.subscribe( (params: Params) => {
      let numTab = params.tab
      // Защита от перехода по несуществующему query параметру (?tab=99999)
      if(numTab > this.tabs.length - 1) {
        this.router.navigate(['/navigator'], {
          queryParams: {
            'tab': numTab = 0
          }
        })
      }

      this.infoTab(numTab)
    })
  }

  // При изменении данных в query параметрах, они передаются и идет фильтрация по массиву tabs.
  infoTab(num: number): void {
    let dataInfo = this.employeesService.employees.data

    // Данные из query параметра мы передаем как индекс массиву tabs,
    // чтобы отфильтровать нужных сотрудников данной компании
    this.infoWin = dataInfo.filter( arr => arr.type == this.tabs[num])
  }

}
