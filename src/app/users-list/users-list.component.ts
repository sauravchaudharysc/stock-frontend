import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:Users[];
  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        "id":1,
        "firstName":"Saurav",
        "lastName":"Chaudhary",
        "emailId":"sauravchaudhary717@gmail.com"
    },{
      "id":2,
      "firstName":"Sayan",
      "lastName":"Chakrobarty",
      "emailId":"sayanChakrobarty@gmail.com"
    },{
      "id":3,
      "firstName":"Tanishq",
      "lastName":"Bansal",
      "emailId":"tanishqBansal@gmail.com"
    }
  ];
  }

}
