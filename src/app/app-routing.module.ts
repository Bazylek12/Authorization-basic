import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoggedInComponent} from './components/logged-in/logged-in.component';
import {SubLoggedInComponent} from './components/sub-logged-in/sub-logged-in.component';
import {LoginComponentModule} from './components/login/login.component-module';
import {LoggedInComponentModule} from './components/logged-in/logged-in.component-module';
import {SubLoggedInComponentModule} from './components/sub-logged-in/sub-logged-in.component-module';
import {LoggedInGuard} from "./guards/logged-in/logged-in.guard";
import {RouteGuard} from "./guards/route/route.guard";

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'auto-login/login',
    component: LoginComponent,
    canActivate: [LoggedInGuard],
    data: {
      redirectUrl: '/auto-login/logged-in'
    }
  }, {
    path: 'auto-login/logged-in',
    component: LoggedInComponent,
    canActivate: [RouteGuard],
    data: {
      redirectUrl: '/auto-login/login'
    }
  }, {
    path: 'auto-login/sub-logged-in',
    component: SubLoggedInComponent,
    canActivate: [RouteGuard],
    data: {
      redirectUrl: '/auto-login/login'
    }
  }]), LoginComponentModule, LoggedInComponentModule, SubLoggedInComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
