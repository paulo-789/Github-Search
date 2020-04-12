import { Component, OnInit } from '@angular/core';
import {GithubHttpService} from '../github-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  user:any;
  repos:any
  username:any;
  
 constructor(private githubhttpService:GithubHttpService){
   this.githubhttpService.getUser().subscribe(user => {
     this.user = user;

   });
   this.githubhttpService.getRepos().subscribe(repos => {
     this.repos = repos;
   });
 }
 dosearch(){
   this.githubhttpService.updateUsername(this.username);

   this.githubhttpService.getUser().subscribe(user=>{
     this.user = user;
   });
   this.githubhttpService.getRepos().subscribe(repos=>{
     this.repos = repos;
   })
 }
  ngOnInit(){ }

}
