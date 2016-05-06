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
  public room = new Room();
  public errorMessages: string;

  constructor(private _roomService: RoomService, private _router: Router) {}

  public addRoom() {
    this._roomService.add(this.room).then(() => {
      this._router.navigate(['/rooms']);
    }).catch((e) => {
      this.errorMessages = e.message;
    });
  }
}
