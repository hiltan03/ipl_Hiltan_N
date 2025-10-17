import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent  
{
    user: {username:string, password:string} = {username: '', password: ''};
    successMessage: string = '';
    errorMessage: string = '';

    loginForm: FormGroup;

    constructor(private fb: FormBuilder,private authService:AuthService)
    {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }
    
    ngOnInit():void{

    }

    onSubmit(): void
    {
        this.successMessage = '';
        this.errorMessage = '';
        if(this.loginForm.valid)
        {
            this.user = {...this.loginForm.value};
            //this.user.username = this.loginForm.get('username')?.value;
            this.authService.login(this.user).subscribe({
                next : (res) => {
                    this.successMessage='User logged in successfully.';
                },
                error : (err) =>{
                    this.errorMessage="Invalid username or password.";
                }
            })
            if(this.simulateBackendLoginError(this.user.username))
            {
                //this.errorMessage = "Please fill out all required fields correctly.";
                this.errorMessage = "Invalid username or password.";  
                return;      
            }
            //this.user.password = this.loginForm.get('password')?.value;
            this.successMessage = "User logged in sucessfully.";
        }
        else
        {
           this.errorMessage = "Please fill out all required fields correctly.";
           //this.errorMessage = "Invalid username or password.";  
        }
    }

    simulateBackendLoginError(username: string): boolean
    {
        return (!!username);
    }
    

    get f()
    {
        return this.loginForm.controls;
    }
}
