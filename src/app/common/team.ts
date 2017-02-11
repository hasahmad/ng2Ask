export class Team {
  team: string;
  wins: string;
  loses: string;
  winsPercentage: string;

  constructor(t:string, w: string, l: string, wp: string) {
    this.team = t;
    this.wins = w;
    this.loses = l;
    this.winsPercentage = wp;
  }
}
