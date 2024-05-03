import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createList (title: string) {
    // Here we want to send a web request to create a list
    return this.webRequestService.post('lists', { title });
  }
  
  getLists () {
    return this.webRequestService.get('lists');
  }
  
  createTask (title: string, listId: string) {
    // Here we want to send a web request to create a task
    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }

  getTasks (listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }
}




