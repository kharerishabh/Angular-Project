import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
servers = [];

onAddServer() {
  this.servers.push('Another Server')
}

onRemoveServer(id: number){
  const position = id + 1;
  this.servers.splice(position, 1)
}
}
