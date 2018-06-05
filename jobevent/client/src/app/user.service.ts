import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  BASE_URL = 'http://localhost:3000/api/';

  constructor(private http:HttpClient, private router:Router) { }
// function for get the user
  getUser(username) {
    return this.http.get(this.BASE_URL + 'users/edit/' + username);
  }

  // function for delete user
  deleteUser(username) {
    this.http.delete(this.BASE_URL + 'users/delete/' + username)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/connexion']);
        }, (err) => {
          console.log(err);
        }
      );
  }
// function for edit user
  editUser(userData) {
    return this.http.put(this.BASE_URL + 'users/edit', userData).subscribe(res => {
      console.log(res);
    });
  }

}