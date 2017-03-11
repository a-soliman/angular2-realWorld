import {Component } from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';

@Component({
    selector: 'new-user',
    templateUrl: 'app/newuser.component.html'
})

export class NewUserComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: [],
            email: [],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
}