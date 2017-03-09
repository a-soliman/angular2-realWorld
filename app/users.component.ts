import { Component, OnInit } from 'angular2/core';
import {UserServices} from './user.services';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers: [UserServices]
})


export class UsersComponent implements OnInit {
    users: any[];

    constructor(private _service: UserServices) {

    }

    ngOnInit() {
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }
}