import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Room} from './room';

@Component({
  selector: 'cbs-room-form',
  templateUrl: 'app/room/room-form.component.html'
})
export class RoomFormComponent {
  @Input() room: Room;
  @Input() submitText: string;
  @Output() submit = new EventEmitter();

  onSubmit() {
    this.submit.emit(null);
  }
}
