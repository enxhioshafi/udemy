import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrl: './add-server.component.css'
})
export class AddServerComponent implements OnInit {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test!' }];

  constructor() {

  }

  ngOnInit() {

  }

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst(){
    this.serverElements[0].name='Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
