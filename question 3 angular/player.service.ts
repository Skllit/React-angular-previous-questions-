import { Player } from './player.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PlayerService {
  playersChanged = new Subject<Player[]>();
  count: number = 7;

  private players: Player[] = [
    new Player(1, 'M S Dhoni', 'Wicket Keeper'),
    new Player(2, 'Virat Kohli', 'Batsman'),
    new Player(3, 'Jasprit Bumrah', 'Bowler'),
    new Player(4, 'Rohit Sharma', 'Batsman'),
    new Player(5, 'Rishabh Pant', 'Wicket Keeper'),
    new Player(6, 'T. Natarajan', 'Bowler'),
    new Player(7, 'R Ashwin', 'Bowler'),
  ];

  getPlayers() {
    return this.players.slice();
  }

  generateID() {
    this.count = this.count + 1;
    return this.count;
  }

  // Get the player by id
  getPlayer(id: number) {
    return this.players.find(player => player.id === id);
  }

  // Add a new player
  addPlayer(player: Player) {
    player.id = this.generateID();
    this.players.push(player);
    this.playersChanged.next(this.players.slice());
  }

  // Update the details of the player with the given id
  updatePlayer(index: number, newPlayer: Player) {
    const playerIndex = this.players.findIndex(player => player.id === index);
    if (playerIndex !== -1) {
      this.players[playerIndex] = newPlayer;
      this.playersChanged.next(this.players.slice());
    }
  }

  // Delete the player at the given id
  deletePlayer(index: number) {
    const playerIndex = this.players.findIndex(player => player.id === index);
    if (playerIndex !== -1) {
      this.players.splice(playerIndex, 1);
      this.playersChanged.next(this.players.slice());
    }
  }
}

