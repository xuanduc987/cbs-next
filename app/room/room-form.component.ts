import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Room} from './room';

@Component({
  selector: 'cbs-room-form',
  templateUrl: 'app/room/room-form.component.html'
})
export class RoomFormComponent {
  @Input()
  public room: Room;
  @Input()
  public submitText: string;
  @Output()
  public onSubmit = new EventEmitter();

  public fireSubmit() {
    this.onSubmit.emit(null);
  }
}
