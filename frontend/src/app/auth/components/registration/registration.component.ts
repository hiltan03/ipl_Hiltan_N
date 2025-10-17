import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  
{
    user: { fullName: string;
            username:string;
            email: string;
            password:string}  = {fullName: '', username: '', email: '', password: ''}
   
    successMessage: string;
    errorMessage: string;
    registrationForm: FormGroup;
    
    constructor(private fb: FormBuilder)
    {
        this.registrationForm = this.fb.group({
            fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
            username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)]],
            email: ['', [Validators.required, Validators.email]]
        });
    }
    ngOnInit():void{
        
    }

    onSubmit()
    {
        this.successMessage = '';
        this.errorMessage = '';
        if(this.registrationForm.invalid)
        {
            this.errorMessage = "Please fill out all required fields correctly.";
            this.successMessage = '';
        }
        else
        {
            this.user = {...this.registrationForm.value};
            this.successMessage = "Registration successful!";
            this.errorMessage = '';
            setTimeout(()=>{ this.resetForm()}, 7000);
        }
    }

    resetForm():void
    {
        this.registrationForm.reset({fullName: '', username: '', email: '', password: ''});
        this.user = {...this.registrationForm.value};
        this.successMessage = '';
        this.errorMessage = ''
    }

    get f()
    {   
        return this.registrationForm.controls;
    }
}
