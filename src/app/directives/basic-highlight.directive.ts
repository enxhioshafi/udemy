import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef:ElementRef , private colorText:ElementRef){
     elementRef.nativeElement
    }

    ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor='green';
      this.colorText.nativeElement.style.color='white';
    }

}