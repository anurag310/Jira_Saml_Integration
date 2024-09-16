import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JiraRedirectComponent } from './jira-redirect/jira-redirect.component';
import { JiraCallbackComponent } from './jira-callback/jira-callback.component';
import { JiraDashboardComponent } from './jira-dashboard/jira-dashboard.component';
import { JiraConnectComponent } from './jira-connect/jira-connect.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JiraRedirectComponent,
    JiraCallbackComponent,
    JiraDashboardComponent,
    JiraConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
