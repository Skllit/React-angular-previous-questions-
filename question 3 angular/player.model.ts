// src/app/players/player.model.ts
export class Player {
    constructor(
      public id: number,
      public name: string,
      /** e.g. 'Batsman' | 'Bowler' | 'Wicket Keeper' */
      public description: string
    ) {}
  }
  