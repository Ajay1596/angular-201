import { AncillaryModule } from './ancillary.module';

describe('AncillaryModule', () => {
  let ancillaryModule: AncillaryModule;

  beforeEach(() => {
    ancillaryModule = new AncillaryModule();
  });

  it('should create an instance', () => {
    expect(ancillaryModule).toBeTruthy();
  });
});
