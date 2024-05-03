import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  
  constructor (private taskServie: TaskService, private router: Router, private route: ActivatedRoute) {}
  
  listId!: string;

  ngOnInit () {
    this.route.params.subscribe (
      (params: Params) => {
        this.listId = params['listId'];

      }
    )
  }

  createTask(title: string) {
    this.taskServie.createTask(title, this.listId).subscribe((newTask: any) => {
      // console.log(newTask);
      this.router.navigate(['../'], {relativeTo: this.route });
    })      
  }

}
