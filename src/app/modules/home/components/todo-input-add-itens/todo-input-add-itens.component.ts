import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTasklist: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addItemTasklist = this.addItemTasklist.trim();//remove todos os espaços da frente e de tras 
    if(this.addItemTasklist){
      this.emitItemTaskList.emit(this.addItemTasklist);
      this.addItemTasklist = "";
    }
  }

}
