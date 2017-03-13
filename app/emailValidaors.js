System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.realEmail = function (control) {
                    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    //validation logic
                    if (!pattern.test(control.value))
                        return { realEmail: true };
                    return null;
                };
                return EmailValidators;
            }());
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
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
//# sourceMappingURL=emailValidaors.js.map