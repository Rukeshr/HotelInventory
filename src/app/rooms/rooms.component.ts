import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Rukesh"
  numberOfRooms = 10
  hideRooms = false;
  toggle(){
    this.hideRooms = !this.hideRooms 
  }

  rooms: Room = {
    totalRooms : 10,
    availableRooms : 15,
    bookedRooms : 5
  };

  roomList: RoomList[] = [
    {
      roomType : 'Delux Room',
      amenaties : 'AC, Free wifi',
      price : 500,
      checkInDate : new Date('12-Nov-2022'),
      checkOutDate : new Date('13-Nov-2022'),
    },
    {
      roomType : 'Delux Room',
      amenaties : 'AC, Free wifi',
      price : 500,
      checkInDate : new Date('12-Nov-2022'),
      checkOutDate : new Date('13-Nov-2022'),
    },
    {
      roomType : 'Delux Room',
      amenaties : 'AC, Free wifi',
      price : 500,
      checkInDate : new Date('12-Nov-2022'),
      checkOutDate : new Date('13-Nov-2022'),
    }
  ]
  selectRoom(room: RoomList){
    console.log(room)
  }
}
