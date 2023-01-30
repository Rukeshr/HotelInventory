export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomType: string;
    amenaties: string;
    price: number;
    checkInDate: Date;
    checkOutDate: Date;
}