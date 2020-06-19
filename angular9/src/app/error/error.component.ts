import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceErrorService } from './service-error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  data: { message: string };
  private errorSub: Subscription;
  constructor( private errorServi: ServiceErrorService, public data: { message: string }) {}
  // constructor(private errorService: ErrorService) {}

   ngOnInit() {
    this.errorSub = this.errorServi.getErrorListener().subscribe(message => {
      this.data = { message };
    });
  }

  onHandleError() {
    this.errorServi.handleError();
   }

   ngOnDestroy() {
     this.errorSub.unsubscribe();
   }
}
