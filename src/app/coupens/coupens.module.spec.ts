import { CoupensModule } from './coupens.module';

describe('CoupensModule', () => {
  let coupensModule: CoupensModule;

  beforeEach(() => {
    coupensModule = new CoupensModule();
  });

  it('should create an instance', () => {
    expect(coupensModule).toBeTruthy();
  });
});
