import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  post: any = [];

  constructor(private dataService: DataServiceService) {
    this.fetchAllPost();
  }

  fetchAllPost() {
    var url = 'https://jsonplaceholder.typicode.com/posts';
    this.dataService.getData(url)
      .subscribe(data => {
        this.post = data.body;
      });
  }

}
