import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { UserModule } from "./user/UserModule";
import { RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChatModule,
    UserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: '', redirectTo: 'login',pathMatch: 'full'},
    {path: '*',component: LoginComponent},
    {path: '**',component: LoginComponent}

    ])
  ],
  providers: [CookieService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
