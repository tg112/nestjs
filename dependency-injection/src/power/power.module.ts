import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // 他のmoduleで利用可能にする
  exports: [PowerService],
})
export class PowerModule {}
