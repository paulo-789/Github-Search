import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs'




@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {
public username = 'paulo-789';
private client_id ='MDQ6VXNlcjU5OTA5MDUz'
private client_secret = '2e10fdc5c2e537b63f4775851d806d0ae8822941';

  constructor(private http:HttpClient) {

   }

   getUser(){
    return this.http.get("https://api.github.com/users/" +this.username +"?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
     }
     getRepos() { return this.http.get( "https://api.github.com/users/" +this.username + "/repos" +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
      );
    }
    updateUsername(username: any) {
      this.username = username;
    }
}