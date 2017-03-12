import {Component } from 'angular2/core';
import {FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';
import {EmailValidators} from './emailValidaors'

@Component({
    selector: 'new-user',
    templateUrl: 'app/newuser.component.html'
})

export class NewUserComponent {
    form: ControlGroup;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidators.realEmail])],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    log(x) {
        console.log(x);
    }

    


    
}