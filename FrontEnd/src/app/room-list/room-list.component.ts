import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  public roomList: Object[] = [
    {'Unit_ID' : '1', 'Unit_Name' : 'A', 'Unit_Area' : '75', 'Availability' : '0', 'Unit_Price' : '750', 'Unit_img' : 'path'},
    {'Unit_ID' : '2', 'Unit_Name' : 'B', 'Unit_Area' : '50', 'Availability' : '1', 'Unit_Price' : '500', 'Unit_img' : 'path'},
    {'Unit_ID' : '3', 'Unit_Name' : 'C', 'Unit_Area' : '55', 'Availability' : '0', 'Unit_Price' : '550', 'Unit_img' : 'path'},
    {'Unit_ID' : '4', 'Unit_Name' : 'D', 'Unit_Area' : '65', 'Availability' : '0', 'Unit_Price' : '650', 'Unit_img' : 'path'},
    {'Unit_ID' : '5', 'Unit_Name' : 'E', 'Unit_Area' : '70', 'Availability' : '1', 'Unit_Price' : '700', 'Unit_img' : 'path'},
  ];

  order() {
    // Fungsi button
  }

  constructor() { }

  ngOnInit() {
  }

}
