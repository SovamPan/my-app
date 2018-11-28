import { Component, Input, ElementRef, OnChanges} from '@angular/core';

@Component({
  selector: 'load-more-tech',
  templateUrl: './load-more-tech.component.html',
  styleUrls: ['./load-more-tech.component.css']
})

export class LeadMoreTechComponent implements OnChanges {

    constructor(private elementRef: ElementRef) {

    }
    ngOnChanges(){
        
    }
    
}
