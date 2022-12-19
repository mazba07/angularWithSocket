import { Component } from '@angular/core';
import { SocketServiceService } from '../services/socket-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  // constructor(private socketServiceService: SocketServiceService) {
   
  //   this.socketServiceService.listen('test event').subscribe((data) => {
  //     console.log(data);
  //   });

  //   this.socketServiceService.emit('test event', "new data from local");
  // }

}
