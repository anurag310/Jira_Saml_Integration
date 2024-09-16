import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jira-connect',
  templateUrl: './jira-connect.component.html',
  styleUrls: ['./jira-connect.component.css']
})
export class JiraConnectComponent {

  scopes: string[] = ['read:jira-work', 'manage:jira-project', 'manage:jira-configuration', 'read:jira-user', 'write:jira-work', 'manage:jira-webhook', 'manage:jira-data-provider','read:sprint:jira-software'];
  clientId: string = 'WnquQdSGovc0bK8QXArerrfmXmLww0VF';
  clientSecret: string = 'ATOA7tZ29UYCurtztzpXR7qGhDmAkPJEWzxlQBKCpemnnx8Azj99X7WbbHERiYxFoWgT9970B73A';
  baseUrl: string = 'https://auth.atlassian.com/authorize';
  audience: string = 'api.atlassian.com';
  response_type: string = 'code';
  prompt: string = 'consent';
  redirect_uri: string = 'http://localhost:4200/jira-callback';
  state: string = '';
  authURL: string = 'https://auth.atlassian.com/oauth/token';
  grant_type = 'authorization_code';
  access_token: any;
  constructor(private http: HttpClient, private router: Router) { 
   
  }
  

  connectToJIRA(): void {
    debugger
    const url =
      `${this.baseUrl}?audience=${this.audience}&client_id=${this.clientId}&scope=${this.scopes.join(' ')}&response_type=${this.response_type}&prompt=${this.prompt}&state=${this.state}`;
    window.open(url, 'sub',
      `toolbar=no, location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=yes,
      width=SomeSize,
      height=SomeSize`)

    window.addEventListener('message', (message: any) => {

      if (message.data.code) {
        this.getJIRAAccessToken(message.data.code);
      }
      
    });
    
  }

  getJIRAAccessToken(code: string): void {
    debugger
    const body = {
      "grant_type": this.grant_type,
      "client_id": this.clientId,
      "client_secret": this.clientSecret,
      "code": code,
      "redirect_uri": this.redirect_uri
    }
    this.http.post(this.authURL, body)
      .subscribe((response: any) => {
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['jira-dashboard']);

      })
  }
}
