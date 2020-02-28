import { Command, Handle } from 'nest-discord';

import { CharacterRealm } from './character-realm';

@Command({
  name: 'disconnect',
  description: 'Disconnect a WoW character connected to your Discord user',
})
export class DisconnectCommand extends CharacterRealm {
  @Handle()
  handle(): void {
    return undefined;
  }
}
