import { Team } from "./Team";

export class Match {
    matchId: number;
    firstTeamId: Team;
    secondTeamId: Team;
    matchDate: Date;
    venue: string;
    result: string;
    status: string;
    winnerTeamId: Team;

    constructor(matchId: number, firstTeamId: Team, secondTeamId: Team, matchDate: Date, venue: string, result: string, status: string, winnerTeamId: Team)
    {
        this.matchId = matchId;
        this.firstTeamId = firstTeamId;
        this.secondTeamId = secondTeamId;
        this.matchDate = matchDate;
        this.venue = venue;
        this.result = result;
        this.status = status;
        this.winnerTeamId = winnerTeamId;
    }

    displayInfo(): void
    {
        console.log(`Match ID: ${this.matchId}, Match Date: ${this.matchDate}, Venue: ${this.venue}`);
    }
}