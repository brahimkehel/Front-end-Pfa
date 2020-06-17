import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
declare const joinini:any;
declare const leaveChannel:any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 
  private _hubConnection: HubConnection;
  nick = '';
  message = '';
  messages: string[] = [];
  heure:any;
  
  constructor(private router:Router) {

  }
  public sendMessage(): void {
    if(this.message!=''){
      this._hubConnection
      .invoke('sendToAll', this.nick, this.message)
      .then(() => this.message = '')
      .catch(err => console.error(err));
    }    
  }  
 
  ngOnInit() {
    this.nick = localStorage.getItem("nom")+" "+localStorage.getItem("prenom");
 
    this._hubConnection = new HubConnectionBuilder().withUrl('http://localhost:57759/ChatHub').build();
 
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));
 
      this._hubConnection.on('sendToAll', (nick: string, receivedMessage: string) => {
        const text = `"${nick}" : ${receivedMessage}`;
        this.heure=Date.now();
        this.messages.push(text);
      });
 
    }
    leave(){
      leaveChannel();
      this.router.navigateByUrl('Acceuil/streams');
    }
}
