import { Injectable } from '@nestjs/common';
import { WorldOfWarcraftClient } from 'blizzard-client/wow';

import { BlizzardService } from './blizzard.service';

@Injectable()
export class WorldOfWarcraftService extends WorldOfWarcraftClient {
  constructor(blizzard: BlizzardService) {
    super(blizzard);
  }
}
