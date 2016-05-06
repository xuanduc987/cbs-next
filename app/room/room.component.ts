import {Component} from '@angular/core';

import {RoomService} from './room.service';

@Component({
  templateUrl: 'app/room/room.component.html'
})
export class RoomComponent {
  public rooms;

  constructor(private _roomService: RoomService) {
    this.rooms = this._roomService.getAll();
  }
}
