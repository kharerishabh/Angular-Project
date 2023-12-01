import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  //selector:'.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationsStatus = 'No Server Created';
  serverName = 'Test Server'
  // userName = ''
  serverCreated = false;

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateSevers () {
    this.serverCreated = true
    this.serverCreationsStatus = 'Server was Created! Name is '+ this.serverName;
  }

  onUpdateServerName (event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
