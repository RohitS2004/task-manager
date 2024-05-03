import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {

  constructor(private taskService: TaskService, private router: Router) { }

  createList(title: string) {
    this.taskService.createList(title).subscribe((list: any) => {

      // now we navigate to /lists/list._id
      this.router.navigate(['lists', list._id]);
    });
  }
}