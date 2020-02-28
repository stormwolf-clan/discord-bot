import { Arg } from 'nest-discord';
import { slugify } from 'voca';

export abstract class CharacterRealm {
  @Arg({
    description: 'Character name',
    transform: slugify,
  })
  character: string;

  @Arg({
    description: 'Realm',
    transform: slugify,
  })
  realm: string;
}
