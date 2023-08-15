import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {
  btnText = 'Confirmar';

  async createHandler(event: any){
    console.log('Enviou!');
  }
}
