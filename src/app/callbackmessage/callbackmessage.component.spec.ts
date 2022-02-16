import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackmessageComponent } from './callbackmessage.component';

describe('CallbackmessageComponent', () => {
  let component: CallbackmessageComponent;
  let fixture: ComponentFixture<CallbackmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
