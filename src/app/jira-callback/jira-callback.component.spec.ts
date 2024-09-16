import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraCallbackComponent } from './jira-callback.component';

describe('JiraCallbackComponent', () => {
  let component: JiraCallbackComponent;
  let fixture: ComponentFixture<JiraCallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JiraCallbackComponent]
    });
    fixture = TestBed.createComponent(JiraCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
