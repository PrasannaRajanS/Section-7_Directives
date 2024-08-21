import { Directive } from "@angular/core";


@Directive({
    selector:'a[appsafelink]',
    host:{
        '(click)':'onConfirmLeavePage($event)'
    }
})

export class safeLinkDirective{

    constructor(){
        console.log('Safe Link Directive Is Active');
        
    }

    onConfirmLeavePage(event:MouseEvent){
        const wantsToLeave = window.confirm('Do you want to leave the app?')
        if(wantsToLeave){
            return;
        }
        event.preventDefault()
    }
}