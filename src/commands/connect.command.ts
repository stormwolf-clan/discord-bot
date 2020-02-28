import { Command, Discord, Handle } from 'nest-discord';
import { from, Observable } from 'rxjs';
import { catchError, mergeMap, pluck } from 'rxjs/operators';

import { WorldOfWarcraftService } from '../blizzard';
import { CharacterRealm } from './character-realm';

@Command({
  name: 'connect',
  description: 'Connect a WoW character to your Discord user',
})
export class ConnectCommand extends CharacterRealm {
  constructor(private readonly wow: WorldOfWarcraftService) {
    super();
  }

  @Handle()
  handle(message: Discord.Message): Observable<any> {
    return from(
      this.wow.characterProfileSummary(this.realm, this.character),
    ).pipe(
      pluck('data'),
      mergeMap(async () => {
        return message.reply(
          `Your WoW character ${this.character} on realm ${this.realm} has successfully been connected to your Discord user.`,
        );
      }),
      catchError(() =>
        message.reply(
          `Couldn't find a WoW character named ${this.character} on realm ${this.realm}`,
        ),
      ),
    );
  }
}
