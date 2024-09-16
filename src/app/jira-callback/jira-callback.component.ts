import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jira-callback',
  templateUrl: './jira-callback.component.html',
  styleUrls: ['./jira-callback.component.css']
})
export class JiraCallbackComponent {
  constructor(private route: ActivatedRoute) {
    const message = {
      code: this.route.snapshot.queryParams['code']
    }
    window.opener.postMessage(message,
      {
        targetOrigin: '*'
      })
    window.close();
  }

}
