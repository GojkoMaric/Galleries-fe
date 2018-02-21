import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Observer } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  private users: User[]=[];

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  public getGalleryById(id: number) {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://127.0.0.1:8000/api/authors/' + id, {
                headers: this.authService.getRequestHeaders()
            }).subscribe((user: any) => {
                let newUser = user;
                o.next(newUser);
                return o.complete();
            });
        });
    }

}
