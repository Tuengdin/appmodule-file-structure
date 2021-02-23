import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-categorymenu',
    templateUrl: './categorymenu.component.html',
    
})

export class CategoryMenuComponent {
    @Input()
    title: string;
    
    
    constructor() {}
  
}