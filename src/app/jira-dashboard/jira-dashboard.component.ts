import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jira-dashboard',
  templateUrl: './jira-dashboard.component.html',
  styleUrls: ['./jira-dashboard.component.css']
})
export class JiraDashboardComponent {
  accessible_resources = 'https://api.atlassian.com/oauth/token/accessible-resources'
  cloud_id: string = '';
  
  accountId: string='';

 
  projects: any[] = [];
  permissions:any[]=[];
  issuetype:any[]=[];
  role:any[]=[];
  sprint: any[]=[];
  constructor(private http: HttpClient) {
    this.getCloudID();
  }

  getCloudID(): void {
    this.http.get(this.accessible_resources, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }).subscribe((response: any) => {
      this.cloud_id = response[0].id;
      this.getProjectList();
      this.getPermissions();
      this.getIssueType();
      this.getRole();
      this.getSprint();
      
    })
  }

  getProjectList(): void {
    const url = `https://api.atlassian.com/ex/jira/${this.cloud_id}/rest/api/3/project`
    this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }).subscribe((response: any) => {
      this.projects = response;
    })
  }
  getPermissions():void{
    const url = `https://api.atlassian.com/ex/jira/${this.cloud_id}/rest/api/3/permissions`
    this.http.get(url,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }).subscribe((res:any)=>{
      this.permissions = res;
      console.log("Permissions : ",res);
    })
  }

  getIssueType():void{
    const url = `https://api.atlassian.com/ex/jira/${this.cloud_id}/rest/api/3/issuetype`
    this.http.get(url,{
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('access_token')}`
      }
    }).subscribe((res:any)=>{
      this.issuetype = res;
      console.log("IssueTypoe",this.issuetype);
    }
    )
  }

  getRole():void{
    const url = `https://api.atlassian.com/ex/jira/${this.cloud_id}/rest/api/3/role`
    this.http.get(url,{
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('access_token')}`
      }
    }).subscribe((res:any)=>{
      this.role = res;
      console.log("Role",this.role);
    }
    )
  }

  getSprint():void{
    const url = `https://api.atlassian.com/ex/jira/${this.cloud_id}/rest/agile/1.0/board/1/sprint`
    this.http.get(url,{
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('access_token')}`
      }
    }).subscribe((res:any)=>{
      this.sprint = res.values;
      console.log("Sprint",this.sprint);
    }
    )
  }

  getUser(accountId:any):void{
    debugger
    //const url = `https://api.atlassian.com/ex/jira/${this.cloud_id}/rest/api/3/user`
    const url = `https://api.atlassian.com/ex/jira/${this.cloud_id}/rest/api/3/user?accountId=${this.accountId}`
    this.http.get(url,{headers:
      {
        'Authorization':`Bearer ${localStorage.getItem('access_token')}`
      }}).subscribe((res:any)=>{
        console.log("User",res);
      })
  }

  

  onSubmit() {
    console.log('Form submitted:', this.accountId);
    this.getUser(this.accountId);
  }
}
