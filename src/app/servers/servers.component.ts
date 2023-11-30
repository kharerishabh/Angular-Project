import { Component } from '@angular/core';

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

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateSevers () {
    this.serverCreationsStatus = 'Server was Created';
  }
}
