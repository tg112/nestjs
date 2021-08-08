import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiscService {
  constructor(private powerService: PowerService) {}

  getDate() {
    console.log('Drawing 20 watts of power from PowerService');
    this.powerService.supplayPower(20);
    return 'Data';
  }
}
