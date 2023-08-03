import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Pepe';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient():void {
    this.name = 'Pepita';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': ' no tenemos ningún cliente esperando.',
    '=1': ' tenemos un cliente esperando.',
    '=2': ' tenemos 2 personas esperando.',
    'other': ' tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clients.shift();
  }

}
