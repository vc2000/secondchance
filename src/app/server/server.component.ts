import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  /*selector: '[app-server]' ,  setting the selector as an attribute + read app.component.html file */
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
   }

  ngOnInit() {
  }

}
