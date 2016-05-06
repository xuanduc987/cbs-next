import {Component} from '@angular/core';

import {RoomService} from './room.service';

@Component({
  templateUrl: 'app/room/room.component.html'
})
export class RoomComponent {
  rooms = this._roomService.getAll();

  constructor(private _roomService: RoomService) {}
}
