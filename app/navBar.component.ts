import {Component} from 'angular2/core';
import { RouterLink} from 'angular2/router'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [RouterLink]
})

export class NavBarComponent {

}