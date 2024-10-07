import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './userservice';
import { UserEditComponent } from './edit-user-form/edit-user-form.component';
// import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserFormComponent, UserEditComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule,HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
