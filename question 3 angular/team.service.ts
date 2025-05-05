import { Player } from './player.model';
import { EventEmitter } from '@angular/core';

export class TeamService {
  teamChanged = new EventEmitter<Player[]>();
  playerId: number;

  private team: Player[] = [];

  getTeam() {
    return this.team.slice();
  }

  // Edit a player of the given id
  editPlayer(id: number, nwPlayer: Player) {
    const playerIndex = this.team.findIndex(player => player.id === id);
    if (playerIndex !== -1) {
      this.team[playerIndex] = nwPlayer;
      this.teamChanged.emit(this.team.slice());
    }
  }

  // Add a player to the team
  addPlayer(player: Player) {
    const exists = this.team.find(p => p.id === player.id);
    if (exists) {
      alert('This Player already exists in your team !!');
    } else {
      this.team.push(player);
      this.teamChanged.emit(this.team.slice());
    }
  }

  // Delete a player from the team
  deletePlayer(id: number) {
    const playerIndex = this.team.findIndex(player => player.id === id);
    if (playerIndex !== -1) {
      this.team.splice(playerIndex, 1);
      this.teamChanged.emit(this.team.slice());
    }
  }

  // Get the status of the team composition
  getStatus() {
    const batsmen = this.team.filter(player => player.description === 'Batsman').length;
    const bowlers = this.team.filter(player => player.description === 'Bowler').length;
    const wicketKeepers = this.team.filter(player => player.description === 'Wicket Keeper').length;

    const status: string[] = [];
    if (batsmen !== 2) {
      status.push('You do not have the required number of batsmen in your team');
    }
    if (bowlers !== 2) {
      status.push('You do not have the required number of bowler in your team');
    }
    if (wicketKeepers !== 1) {
      status.push('You do not have the required number of wicket-keeper in your team');
    }

    return status;
  }
}