import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraConnectComponent } from './jira-connect.component';

describe('JiraConnectComponent', () => {
  let component: JiraConnectComponent;
  let fixture: ComponentFixture<JiraConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JiraConnectComponent]
    });
    fixture = TestBed.createComponent(JiraConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
