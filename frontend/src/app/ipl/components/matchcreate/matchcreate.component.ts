import { Component } from '@angular/core';
import { Match } from '../../types/Match';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-matchcreate',
    //standalone: true,
    templateUrl: './matchcreate.component.html',
    styleUrls: ['./matchcreate.component.scss']
})

export class MatchCreateComponent 
{
    match: Match;
    successMessage: string;
    errorMessage: string;
    matchForm: FormGroup;

    isSubmitted: Boolean = false;

    constructor(private fb: FormBuilder)
    {

    }

    ngOnInit()
    {
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
            this.match = {...this.matchForm.value} as Match;

            this.successMessage = "Match created successfully!";
            this.errorMessage = "";
        }
        else
        {
            this.successMessage = ""
            this.errorMessage = "Please fill out all required fields correctly.";
        }
    }

    resetForm()
    {
        this.matchForm.reset({firstTeamId: 0, secondTeamId: 0, matchDate: '', venue: '', result: '', status: '', winnerTeamId: 0});
        this.successMessage = "";
        this.errorMessage = "";
        this.isSubmitted = false;
    }
    
}
