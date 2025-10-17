import { Component } from '@angular/core';
import { TicketBooking } from '../../types/TicketBooking';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-ticketbooking',
    //standalone: true,
    templateUrl: './ticketbooking.component.html',
    styleUrls: ['./ticketbooking.component.scss']
})

export class TicketBookingComponent 
{
    ticketBooking: TicketBooking;
    successMessage: string;
    errorMessage: string;
    ticketBookingForm: FormGroup;

    isSubmitted: Boolean = false;

    constructor(private fb: FormBuilder)
    {

    }

    ngOnInit()
    {
        this.ticketBookingForm = this.fb.group(
            {
                bookingId: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                matchId: ['', [Validators.required]],
                numberOfTickets: ['', [Validators.required, Validators.min(1)]],
            }
        )
    }

    get bookingId()
    {
        return this.ticketBookingForm.get("bookingId");
    }

    get email()
    {
        return this.ticketBookingForm.get("email");
    }

    get matchId()
    {
        return this.ticketBookingForm.get("matchId");
    }

    get numberOfTickets()
    {
        return this.ticketBookingForm.get("numberOfTickets");
    }

    onSubmit()
    {
        this.isSubmitted = true;
        if(this.ticketBookingForm.valid)
        {
            this.ticketBooking = {...this.ticketBookingForm.value} as TicketBooking;

            this.successMessage = "Tickets booked successfully!";
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
        this.ticketBookingForm.reset({email: "", matchId: 0, numberOfTickets: 1});
        this.successMessage = "";
        this.errorMessage = "";
        this.isSubmitted = false;
    }

}
