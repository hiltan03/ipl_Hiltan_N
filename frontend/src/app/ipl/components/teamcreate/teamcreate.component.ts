import { Component } from '@angular/core';
import { Team } from '../../types/Team';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-teamcreate',
    //standalone: true,
    templateUrl: './teamcreate.component.html',
    styleUrls: ['./teamcreate.component.scss']
})

export class TeamCreateComponent 
{
    team: Team = {
        teamId: 0, teamName: '', location: '', ownerName: '', establishmentYear: 2025,
        displayInfo: function (): void {
            throw new Error('Function not implemented.');
        }
    }; 
    successMessage: string;
    errorMessage: string;
    teamForm: FormGroup;

    isSubmitted: Boolean = false;

    constructor(private fb: FormBuilder)
    {

    }
    
    ngOnInit()
    {
        this.teamForm = this.fb.group(
            {
                teamId: ['', [Validators.required]],
                teamName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
                location: ['', [Validators.required]],
                ownerName: ['', [Validators.required]],
                establishmentYear: ['', [Validators.required]]
            }
        )
        }

        get teamId()
        {
            return (this.teamForm.get('teamId'));
        }

        get teamName()
        {
            return (this.teamForm.get("teamName"));
        }

        get location()
        {
            return (this.teamForm.get("location"));
        }

        get ownerName()
        {
            return (this.teamForm.get("ownerName"));
        }

        get establishmentYear()
        {
            return this.teamForm.get('establishmentYear');
        }


    onSubmit()
    {
        this.isSubmitted = true;
        if(this.teamForm.valid)
        {
            this.team = {} as Team;
            this.team.teamId = this.teamForm.value.teamId;
            this.team.teamName = this.teamForm.value.teamName;
            this.team.location = this.teamForm.value.location;
            this.team.ownerName = this.teamForm.value.ownerName;
            this.team.establishmentYear = this.teamForm.value.establishmentYear;

            this.successMessage = "Team has been successfully created!";
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
        this.teamForm.reset({teamName: '', location: '', ownerName: '', establishmentYear: 2025});
        this.successMessage = "";
        this.errorMessage = "";
        this.isSubmitted = false;
    }
}
