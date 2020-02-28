import { Module } from '@nestjs/common';
import { DiscordModule } from 'nest-discord';
import { CommandsModule } from './commands';
import { BlizzardModule } from './blizzard';

@Module({
  imports: [
    DiscordModule.forRoot({
      token: process.env.DISCORD_TOKEN!,
      commandPrefix: '/',
    }),
    BlizzardModule,
    CommandsModule,
  ],
})
export class AppModule {}
