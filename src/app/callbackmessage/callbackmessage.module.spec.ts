import { CallbackmessageModule } from './callbackmessage.module';

describe('CallbackmessageModule', () => {
  let callbackmessageModule: CallbackmessageModule;

  beforeEach(() => {
    callbackmessageModule = new CallbackmessageModule();
  });

  it('should create an instance', () => {
    expect(callbackmessageModule).toBeTruthy();
  });
});
