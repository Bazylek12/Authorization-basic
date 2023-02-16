import { NgModule } from '@angular/core';
import { LoggedInComponent } from './logged-in.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [
    RouterLinkWithHref
  ],
  declarations: [LoggedInComponent],
  providers: [],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
