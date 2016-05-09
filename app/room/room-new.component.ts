import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Room} from './room';
import {RoomService} from './room.service';
import {RoomFormComponent} from './room-form.component';

@Component({
  templateUrl: 'app/room/room-new.component.html',
  directives: [RoomFormComponent]
})
export class RoomNewComponent {
  room = new Room();
  errorMessages: string;

  constructor(private roomService: RoomService, private router: Router) {}

  addRoom() {
    this.roomService.add(this.room).then(() => {
      this.router.navigate(['/rooms']);
    }).catch((e) => {
      this.errorMessages = e.message;
    });
  }
}
