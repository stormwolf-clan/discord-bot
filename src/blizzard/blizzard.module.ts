import { Module } from '@nestjs/common';

import { BlizzardService } from './blizzard.service';
import { WorldOfWarcraftService } from './wow.service';

const services = [BlizzardService, WorldOfWarcraftService];

@Module({
  providers: services,
  exports: services,
})
export class BlizzardModule {}
