import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraRedirectComponent } from './jira-redirect.component';

describe('JiraRedirectComponent', () => {
  let component: JiraRedirectComponent;
  let fixture: ComponentFixture<JiraRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JiraRedirectComponent]
    });
    fixture = TestBed.createComponent(JiraRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
