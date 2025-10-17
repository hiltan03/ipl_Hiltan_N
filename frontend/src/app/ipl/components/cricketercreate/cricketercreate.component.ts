import { Component } from '@angular/core';
import { Cricketer } from '../../types/Cricketer';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-cricketercreate',
    //standalone: true,
    templateUrl: './cricketercreate.component.html',
    styleUrls: ['./cricketercreate.component.scss']
})
export class CricketerCreateComponent 
{
    cricketer: Cricketer;
    successMessage: string;
    errorMessage: string;
    cricketerForm: FormGroup;

    isSubmitted: Boolean = false;

    constructor(private fb: FormBuilder)
    {

    }

    ngOnInit()
    {
        this.cricketerForm = this.fb.group(
            {
                cricketerId: ['', [Validators.required]],
                teamId: ['', [Validators.required]],
                cricketerName: ['', [Validators.required]],
                age: ['', [Validators.required]],
                nationality: ['', [Validators.required]],
                experience: ['', [Validators.required, Validators.min(0)]],
                role: ['', [Validators.required]],
                totalRuns: ['', [Validators.required]],
                totalWickets: ['', [Validators.required]],
            }
        )
    }

    get cricketerId()
    {
        return (this.cricketerForm.get('cricketerId'));
    }

    get teamId()
    {
        return (this.cricketerForm.get('teamId'));
    }

    get cricketerName()
    {
        return (this.cricketerForm.get('cricketerName'));
    }

    get age()
    {
        return (this.cricketerForm.get('age'));
    }

    get nationality()
    {
        return (this.cricketerForm.get('nationality'));
    }

    get experience()
    {
        return (this.cricketerForm.get('experience'));
    }

    get role()
    {
        return (this.cricketerForm.get('role'));
    }

    get totalRuns()
    {
        return (this.cricketerForm.get('totalRuns'));
    }

    get totalWickets()
    {
        return (this.cricketerForm.get('totalWickets'));
    }

    onSubmit()
    {
        this.isSubmitted = true;
        if(this.cricketerForm.valid)
        {
            this.cricketer = {...this.cricketerForm.value} as Cricketer;

            this.successMessage = "Cricketer created successfully!";
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
        this.cricketerForm.reset({cricketerName: '', age : 18, nationality: '', experience: '', role: '', totalRuns: 0, totalWickets: 0});
        this.successMessage = "";
        this.errorMessage = "";
        this.isSubmitted = false;
    }

     
}