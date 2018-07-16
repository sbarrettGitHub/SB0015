import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
    selector: 'sb14-countdown',
    templateUrl: './countDown.component.html'
})
export class CountDownComponent implements OnInit{
    @Input('countDownFromMinutesSeconds') countDownFromMinutesSeconds: string;
    @Input('message') message: string;
    @Output() countDownReady: EventEmitter<string> =
            new EventEmitter<string>();    

    countDown : Date;
    countDownMinutes : string;
    countDownSeconds : string;
    private subscription: Subscription;

    ngOnInit() { 
        // Enforce the format "NN:SS" 
        let regex :RegExp = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");
        if(regex.test(this.countDownFromMinutesSeconds) == false){
            this.countDownMinutes = "Error NN";
            this.countDownSeconds = "SS expected here!";
            return;
        }
        // Assumes format NN:SS
        let fullDate : string = "January 01, 0000 00:" + this.countDownFromMinutesSeconds + ":00"
        this.countDown = new Date(fullDate);
        debugger;
        // Creat the timer
        let countDownTimer = timer(0,1000);

        this.subscription = countDownTimer.subscribe(t => {
            
            // Count down by 1 second
            this.countDown.setSeconds(this.countDown.getSeconds() -1);
                        
            // pull out the mins and seconds "00" and "00", used in view {{countDownMinutes}}:{{countDownSeconds}}
            let mins: number = this.countDown.getMinutes();
            let secs: number = this.countDown.getSeconds();
            this.countDownMinutes = mins > 9 ? mins.toString() : "0" + mins.toString(); //Ensure 2 digits "00"
            this.countDownSeconds = secs > 9 ? secs.toString() : "0" + secs.toString(); //Ensure 2 digits "00"

            // Have we reached 00:00? Fire countdown ready event
            if(this.countDown.getMinutes() == 0 && this.countDown.getSeconds() == 0){
                this.countDownReady.emit(``);
                this.subscription.unsubscribe();
            }           
        });
     }
     ngOnDestroy() {
        this.subscription.unsubscribe();
      }    
}