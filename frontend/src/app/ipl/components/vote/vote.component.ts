import { Component } from '@angular/core';
import { Vote } from '../../types/Vote';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-vote',
    //standalone: true,
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.scss']
})

export class VoteComponent  
{
    vote: Vote;
    successMessage: string;
    errorMessage: string;
    voteForm: FormGroup;

    isSubmitted: Boolean = false;

    constructor(private fb: FormBuilder)
    {

    }

    ngOnInit()
    {
        this.voteForm = this.fb.group(
            {
                voteId: ['', [Validators.required]],
                email: ['', [Validators.required]],
                category: ['', [Validators.required]],
                cricketerId: ['', [Validators.required]],
                teamId: ['', [Validators.required]],
            }
        )
    }

    get voteId()
    {
        return (this.voteForm.get('voteId'));
    }

    get email()
    {
        return (this.voteForm.get("email"));
    }

    get category()
    {
        return (this.voteForm.get("category"));
    }

    get cricketerId()
    {
        return (this.voteForm.get("cricketerId"));
    }

    get teamId()
    {
        return (this.voteForm.get("teamId"));
    }

    onSubmit()
    {
        this.isSubmitted = true;
        if(this.voteForm.valid)
        {
            this.vote = {...this.voteForm.value} as Vote;

            this.successMessage = "Vote submitted successfully!";
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
        this.voteForm.reset({email: "", category: '', cricketerId: 0, teamId: 0});
        this.successMessage = "";
        this.errorMessage = "";
        this.isSubmitted = false;
    }

}
