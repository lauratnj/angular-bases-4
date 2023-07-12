import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower:string = 'laura';
  public nameUpper:string = 'LAURA';
  public fullName:string = 'lAuRa';
}
