import { NewDataModule } from './new-data.module';

describe('NewDataModule', () => {
  let newDataModule: NewDataModule;

  beforeEach(() => {
    newDataModule = new NewDataModule();
  });

  it('should create an instance', () => {
    expect(newDataModule).toBeTruthy();
  });
});
