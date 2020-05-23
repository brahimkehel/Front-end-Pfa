import { Component, OnInit, NgZone } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

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
 
  public sendMessage(): void {
    this._hubConnection
      .invoke('sendToAll', this.nick, this.message)
      .then(() => this.message = '')
      .catch(err => console.error(err));
  }
 
  ngOnInit() {
    this.nick = localStorage.getItem("nom")+" "+localStorage.getItem("prenom");
 
    this._hubConnection = new HubConnectionBuilder().withUrl('http://localhost:57759/ChatHub').build();
 
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));
 
      this._hubConnection.on('sendToAll', (nick: string, receivedMessage: string) => {
        const text = `${nick}: ${receivedMessage}`;
        this.messages.push(text);
      });
 
    }
  
}
