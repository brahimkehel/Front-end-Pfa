import { UtilisateursModule } from './../../../classes/utilisateurs/utilisateurs.module';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

   userd:any;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.auth.getUserProfile().subscribe(
      res=>{
      },
      err=>{
        console.log(err);
      }
    );
  }

}
