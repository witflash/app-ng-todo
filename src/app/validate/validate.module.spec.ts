import { ValidateModule } from './validate.module';

describe('ValidateModule', () => {
  let validateModule: ValidateModule;

  beforeEach(() => {
    validateModule = new ValidateModule();
  });

  it('should create an instance', () => {
    expect(validateModule).toBeTruthy();
  });
});
