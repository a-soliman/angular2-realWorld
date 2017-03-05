import {Component} from 'angular2/core';
// import the Comonent
import {NavBarComponent} from './navbar.component';

@Component({
    selector: 'my-app',
    template: `
            <navbar></navbar>

            
            `,
    directives: [NavBarComponent]
})
export class AppComponent {}