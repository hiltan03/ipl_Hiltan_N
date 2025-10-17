import { Component } from "@angular/core";
import { Cricketer } from "../../types/Cricketer";

@Component(
    {
        selector: 'app-cricketersample',
        standalone: true,
        templateUrl: './cricketersample.component.html',
        styleUrls: ['./cricketersample.component.scss']
    }
)
export class CricketerSampleComponent 
{
    cricketer = new Cricketer(1,1,"Virat", 35, "Indian",17,"Batsman",18000, 25);  
}
