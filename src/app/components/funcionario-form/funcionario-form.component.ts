import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  @Input() btnText!: string;

  funcionarioForm!: FormGroup;

  ngOnInit():void{
    this.funcionarioForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      rg: new FormControl('',[Validators.required]),
      departament: new FormControl('',[Validators.required]),
      photo: new FormControl('')
    })
  }
  get name(){
    return this.funcionarioForm.get('name')!;
  }
  get rg(){
    return this.funcionarioForm.get('rg')!;
  }
  get departament(){
    return this.funcionarioForm.get('departament')!;
  }

  onFileSelected(event: any){

    const file: File = event.target.files[0];
    this.funcionarioForm.patchValue({image : file});

  }

  submit(){
    if (this.funcionarioForm.invalid){
      return;
    }
    console.log(this.funcionarioForm.value);
  }
}
