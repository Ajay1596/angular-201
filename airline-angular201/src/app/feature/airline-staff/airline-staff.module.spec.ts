import { AirlineStaffModule } from './airline-staff.module';

describe('AirlineStaffModule', () => {
  let airlineStaffModule: AirlineStaffModule;

  beforeEach(() => {
    airlineStaffModule = new AirlineStaffModule();
  });

  it('should create an instance', () => {
    expect(airlineStaffModule).toBeTruthy();
  });
});
