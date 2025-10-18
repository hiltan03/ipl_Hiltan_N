import { Component } from '@angular/core';
import { Team } from '../../types/Team';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IplService } from '../../services/ipl.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-teamcreate',
    //standalone: true,
    templateUrl: './teamcreate.component.html',
    styleUrls: ['./teamcreate.component.scss']
})

export class TeamCreateComponent 
{
    team: Team 
    = {
        teamId: 0, teamName: '', location: '', ownerName: '', establishmentYear: 2025,
        displayInfo: function (): void {
            throw new Error('Function not implemented.');
        }
    }; 
    successMessage: string | null;
    errorMessage: string|null;
    teamForm: FormGroup;
    currentYear:number = new Date().getFullYear();

    isSubmitted: Boolean = false;

    constructor(private fb: FormBuilder,private iplService:IplService){}
    
    // ngOnInit()
    // {
    //     this.teamForm = this.fb.group(
    //         {
    //             teamId: ['', [Validators.required]],
    //             teamName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    //             location: ['', [Validators.required]],
    //             ownerName: ['', [Validators.required]],
    //             establishmentYear: ['', [Validators.required]]
    //         }
    //     )
    //     }

    //     get teamId()
    //     {
    //         return (this.teamForm.get('teamId'));
    //     }

    //     get teamName()
    //     {
    //         return (this.teamForm.get("teamName"));
    //     }

    //     get location()
    //     {
    //         return (this.teamForm.get("location"));
    //     }

    //     get ownerName()
    //     {
    //         return (this.teamForm.get("ownerName"));
    //     }

    //     get establishmentYear()
    //     {
    //         return this.teamForm.get('establishmentYear');
    //     }

    ngOnInit():void{
       this.initializeForm();
    }

    private initializeForm():void{
        this.teamForm = this.fb.group({
          //  teamId: ['', [Validators.required]],
            teamName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
            location: ['', [Validators.required]],
            ownerName: ['', [Validators.required]],
            establishmentYear: ['', [Validators.required]]
        })
    }

    onSubmit()
    {
        this.isSubmitted = true;
        if(this.teamForm.valid) {
            this.team = {
                teamId : 0,
            //teamId : this.teamForm.value.teamId,
            teamName : this.teamForm.value.teamName,
            location : this.teamForm.value.location,
            ownerName : this.teamForm.value.ownerName,
            establishmentYear : this.teamForm.value.establishmentYear,
            displayInfo :()=>{ 
                console.log(`Team: ${this.team.teamName},Location: ${this.team.location} `)
            }
          };
            this.successMessage = "Team created successfully!";
            this.errorMessage = null;
        this.addTeam();
        }
        else
        {
            this.successMessage = null;
            this.errorMessage = "Please fill out all required fields correctly.";
        }
    }

    private addTeam():void{
        const teamData = this.teamForm.value;
        this.iplService.addTeam(teamData).subscribe({
            next:(data:Team)=> { this.team = data;
            // this.successMessage = "Team created successfully!";
            // this.errorMessage = null;
            this.resetForm();
            },     
            error: (err:HttpErrorResponse) => this.handleError(err)
        })
    }

    resetForm()
    {
        this.teamForm.reset({teamName: '', location: '', ownerName: '', establishmentYear: 2025});
       // this.successMessage = null;
        this.errorMessage = null;
        this.isSubmitted = false;
    }

    private handleError(error:HttpErrorResponse){
        this.errorMessage = error.message;
       // this.successMessage = null;
    }
}
