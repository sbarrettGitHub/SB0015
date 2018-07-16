import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle : string = 'Welcome to SB0014';
    NextGame = ()=>{
        console.log("Begin new game");
    }
}