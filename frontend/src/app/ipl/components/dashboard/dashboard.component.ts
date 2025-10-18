import { Component } from "@angular/core";
import { Team } from "../../types/Team";
import { Cricketer } from "../../types/Cricketer";
import { Match } from "../../types/Match";
import { IplService } from "../../services/ipl.service";

@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.html']

})
export class DashboardComponent  {
 
    teams:Team[] = [];
    cricketers:Cricketer[] = [];
    matches:Match[] = [];

    constructor(private iplService:IplService){}

    ngOnInit():void{
        this.loadCricketers();
        this.loadMatches();
        this.loadTeams();
    }

    loadCricketers():void{
        this.iplService.getAllCricketers().subscribe({
            next:(data:Cricketer[]) => this.cricketers = data ,
            error: (err) => console.error("Error loading Crickters")
        });
    }

    loadTeams():void{
        this.iplService.getAllTeams().subscribe({
            next:(data:Team[]) => this.teams = data ,
            error: (err) => console.error("Error loading teams")
        });
    }
    loadMatches():void{
        this.iplService.getAllMatches().subscribe({
            next:(data:Match[]) => this.matches = data ,
            error: (err) => console.error("Error loading matches")
        });
    }


}
