import { PassengerModule } from './passenger.module';

describe('PassengerModule', () => {
  let passengerModule: PassengerModule;

  beforeEach(() => {
    passengerModule = new PassengerModule();
  });

  it('should create an instance', () => {
    expect(passengerModule).toBeTruthy();
  });
});
