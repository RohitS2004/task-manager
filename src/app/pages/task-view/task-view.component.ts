import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-view',
  standalone: true,
  // ! you have to import RouterOutlet, RouterLinkActive and RouterLink to do routing from one component to another
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent implements OnInit {

  lists: any;
  tasks:any;

  constructor (private taskService: TaskService, private route: ActivatedRoute) { 
  }   

  ngOnInit () {

    this.route.params.subscribe(
      (params: Params) => {     
        // console.log(params);

        if (params['listId']) {
          this.taskService.getTasks(params['listId']).subscribe((tasks:any) => {
            this.tasks = tasks
          })  
        }
        else {
          this.tasks = undefined;
        }
      }

    )

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists
    })
    
  }
}
