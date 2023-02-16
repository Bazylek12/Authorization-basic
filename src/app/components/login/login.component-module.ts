import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, NgIf, MatButtonModule],
  declarations: [LoginComponent],
  providers: [],
  exports: [LoginComponent]
})
export class LoginComponentModule {
}
