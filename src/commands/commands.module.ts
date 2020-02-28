import { Module } from '@nestjs/common';

import { BlizzardModule } from '../blizzard';
import { ConnectCommand } from './connect.command';

@Module({
  imports: [BlizzardModule],
  providers: [ConnectCommand],
})
export class CommandsModule {}
