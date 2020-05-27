import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Person } from '../person'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  taskList: string[];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.getTasks().subscribe((listofTasks) => {
      this.taskList = listofTasks.map((task: any) => {
        return task.title;
      })
    });
  }

  get dataList(): Person[] {
    return this.filterService.getPerson();
  }

}
