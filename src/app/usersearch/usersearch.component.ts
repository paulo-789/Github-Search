import { Component, OnInit } from '@angular/core';
import {GithubHttpService} from '../github-http.service';
@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {
  user:any;
  repos:any
  username:any;
  
  constructor(private githubhttpService:GithubHttpService) { }
  dosearch(){
    this.githubhttpService.updateUsername(this.username);
 
    this.githubhttpService.getUser().subscribe(user=>{
      this.user = user;
    });
    this.githubhttpService.getRepos().subscribe(repos=>{
      this.repos = repos;
    })
  }
  ngOnInit(){
  }

}
