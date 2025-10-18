import { Component } from '@angular/core';
import { Match } from '../../types/Match';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from '../../types/Team';
import { IplService } from '../../services/ipl.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-matchcreate',
    //standalone: true,
    templateUrl: './matchcreate.component.html',
    styleUrls: ['./matchcreate.component.scss']
})

export class MatchCreateComponent 
{
    match: Match|null;
    successMessage: string|null;
    errorMessage: string|null;
    matchForm: FormGroup;
    teams:Team[] = [];

    isSubmitted: Boolean = false;

    constructor(private fb: FormBuilder,private iplService:IplService){}

    ngOnInit(){
       this.initializeForm();
       this.loadTeams();
    }

    private initializeForm():void{
        this.matchForm = this.fb.group(
            {
                matchId: ['', [Validators.required]],
                firstTeamId: ['', [Validators.required]],
                secondTeamId: ['', [Validators.required]],
                matchDate: ['', [Validators.required]],
                venue: ['', [Validators.required]],
                result: ['', [Validators.required]],
                status: ['', [Validators.required]],
                winnerTeamId: ['', [Validators.required]],
            }
        )

    }

    loadTeams():void{
    this.iplService.getAllTeams().subscribe({
        next:(data:Team[])=> this.teams = data,
        error:(err:HttpErrorResponse)=>this.handleError(err)
    });
    }

    get matchId()
    {
        return (this.matchForm.get("matchId"));
    }

    get firstTeamId()
    {
        return (this.matchForm.get("firstTeamId"));
    }

    get secondTeamId()
    {
        return (this.matchForm.get("secondTeamId"));
    }

    get matchDate()
    {
        return (this.matchForm.get("matchDate"));
    }

    get venue()
    {
        return (this.matchForm.get("venue"));
    }

    get result()
    {
        return (this.matchForm.get("result"));
    }

    get status()
    {
        return (this.matchForm.get("status"));
    }

    get winnerTeamId()
    {
        return (this.matchForm.get("winnerTeamId"));
    }

    onSubmit()
    {
        this.isSubmitted = true;
        if(this.matchForm.valid)
        {
           // this.match = {...this.matchForm.value} as Match;
          
            this.successMessage = "Match created successfully!";
            this.errorMessage = "";
        }
        else
        {
            this.successMessage = ""
            this.errorMessage = "Please fill out all required fields correctly.";
        }
    }

    private addMatch():void{
        const matchData = this.matchForm.value;
        this.iplService.addMatch(matchData).subscribe({
            next:(data:Match)=> { this.match = data;
            this.successMessage = "Team created successfully!";
            this.errorMessage = null;
            this.resetForm();
            },     
            error: (err:HttpErrorResponse) => this.handleError(err)
        })
    }

    resetForm()
    {
        this.matchForm.reset({firstTeamId: 0, secondTeamId: 0, matchDate: '', venue: '', result: '', status: '', winnerTeamId: 0});
        this.successMessage = "";
        this.errorMessage = "";
        this.isSubmitted = false;
    }
    private handleError(error:HttpErrorResponse):void{
        this.errorMessage = error.message;
        this.successMessage = null;
    }
}
