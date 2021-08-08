import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplayPower(watts: number) {
    console.log(`Supplying ${watts} worth of power`);
  }
}
