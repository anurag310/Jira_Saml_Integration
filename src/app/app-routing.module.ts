import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JiraRedirectComponent } from './jira-redirect/jira-redirect.component';
import { JiraCallbackComponent } from './jira-callback/jira-callback.component';
import { JiraConnectComponent } from './jira-connect/jira-connect.component';
import { JiraDashboardComponent } from './jira-dashboard/jira-dashboard.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/jira-connect',
  pathMatch:'full'
},
  {
  path: 'jira-redirect',
  component: JiraRedirectComponent
},
{
  path: 'jira-callback',
  component: JiraCallbackComponent
},
{
  path: 'jira-dashboard',
  component: JiraDashboardComponent
},
{
  path: 'jira-connect',
  component: JiraConnectComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
