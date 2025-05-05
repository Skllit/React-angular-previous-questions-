// src/app/team/team.model.ts
import { Player } from './player.model';

/**
 * A Team is just a collection of Players;
 * you can extend this later with an id, name, etc.
 */
export class Team {
  constructor(
    /** the players currently in this team */
    public players: Player[] = []
  ) {}
}
