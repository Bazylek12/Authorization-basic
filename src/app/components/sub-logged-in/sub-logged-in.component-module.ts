import { NgModule } from '@angular/core';
import { SubLoggedInComponent } from './sub-logged-in.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [
        RouterLinkWithHref
    ],
  declarations: [SubLoggedInComponent],
  providers: [],
  exports: [SubLoggedInComponent]
})
export class SubLoggedInComponentModule {
}
