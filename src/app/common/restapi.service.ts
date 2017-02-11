import {Injectable} from '@angular/core';

import {Player} from './player';
import {Team} from './team';
import {MOCK_PLAYERS} from './mock-players';
import {MOCK_TEAMS} from './mock-teams';

@Injectable()
export class RestApiService {
  getListOfPlayers(): Player[] {
    return MOCK_PLAYERS;
  }

  getListOfTeams(): Team[] {
    return MOCK_TEAMS;
  }
}
