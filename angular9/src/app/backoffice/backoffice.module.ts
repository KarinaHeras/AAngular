import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [BackofficeComponent, PostDetailComponent],
  imports: [
    CommonModule
  ]
})
export class BackofficeModule { }
