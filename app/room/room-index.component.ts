import {Component, OnInit} from '@angular/core';

import {RoomService} from './room.service';

@Component({
  templateUrl: 'app/room/room.component.html'
})
export class RoomIndexComponent implements OnInit {
  rooms;

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.rooms = this.roomService.list();
  }
}
