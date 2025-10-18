import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IplRoutingModule } from "./ipl-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TeamCreateComponent } from "./components/teamcreate/teamcreate.component";
import { CricketerCreateComponent } from "./components/cricketercreate/cricketercreate.component";
import { MatchCreateComponent } from "./components/matchcreate/matchcreate.component";
import { TicketBookingComponent } from "./components/ticketbooking/ticketbooking.component";
import { Vote } from "./types/Vote";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TeamCreateComponent,CricketerCreateComponent
    ,MatchCreateComponent,TicketBookingComponent,Vote,DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    IplRoutingModule,RouterModule,SharedModule
  ],
  exports: [
    
  ]
})
export class IplModule {}
