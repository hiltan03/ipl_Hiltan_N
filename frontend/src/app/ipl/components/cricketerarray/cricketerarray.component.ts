import { Component } from "@angular/core";
import { Cricketer } from "../../types/Cricketer";

@Component({
    selector: 'app-cricketerarray',
    //standalone: true,
    templateUrl: './cricketerarray.component.html',
    styleUrls: ['./cricketerarray.component.scss']
})
export class CricketerArrayComponent  
{
    cricketers: Cricketer[] = [];

    ngOnInit()
    {
        this.cricketers.push(new Cricketer(1, 1, 'Virat Kohli', 35, "Indian", 17, "batsman", 35000, 25));
        this.cricketers.push(new Cricketer(2, 2, 'AB de Villiers', 37, "South Africa", 15, "batsman", 28000, 17));
        this.cricketers.push(new Cricketer(3, 1, 'Chris Gayle', 40, "West Indies", 20, "batsman", 25000, 30));
        this.cricketers.push(new Cricketer(4, 2, 'Abhishek', 23, "Indian", 5, "batsman", 5000, 25));
    }

    showCricketers: Boolean = false;

    toggleCricketers()
    {
        this.showCricketers = !this.showCricketers;
    }
}
