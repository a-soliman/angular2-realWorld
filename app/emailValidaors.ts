import {Class} from 'angular2/core'
import { Control, Validators, Validator} from 'angular2/common';

export class EmailValidators {
    
    
    static realEmail(control: Control) {
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //validation logic
        if(!pattern.test(control.value))
            return { realEmail:true}
 
        return null;
    }
}



/*
export class EmailValidators {
    static cannotContainSpace(control: Control) {
        //validation logic
        if(control.value.indexOf(' ') >= 0)
            return { cannotContainSpace:true}
 
        return null;
    }
}
*/