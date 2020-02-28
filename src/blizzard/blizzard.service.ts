import { Injectable, OnModuleInit } from '@nestjs/common';
import { BlizzardClient, Region, Locale } from 'blizzard-client';

@Injectable()
export class BlizzardService extends BlizzardClient implements OnModuleInit {
  constructor() {
    super({
      region: process.env.BLIZZARD_REGION as Region,
      locale: process.env.BLIZZARD_LOCALE as Locale,
      id: process.env.BLIZZARD_CLIENT_ID!,
      secret: process.env.BLIZZARD_CLIENT_SECRET!,
    });
  }

  async onModuleInit(): Promise<void> {
    await this.authorize();
  }
}
