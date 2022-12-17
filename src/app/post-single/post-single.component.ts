import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent {

  postSingle: any = [];

  constructor(private dataService: DataServiceService, private route: ActivatedRoute) {
    this.fetchSinglePost();
  }

  fetchSinglePost() {

    var id = this.route.snapshot.paramMap.get('id');
    var title = this.route.snapshot.paramMap.get('title');

    var url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    this.dataService.getData(url)
      .subscribe(data => {
        this.postSingle = data.body;
      });
  }

}
