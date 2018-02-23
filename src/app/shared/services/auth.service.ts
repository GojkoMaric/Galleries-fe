import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

    public isAuthenticated: boolean;
    public email;
    public user;

    constructor(private http: HttpClient,
        private router: Router,
    ) {
        this.isAuthenticated = !!window.localStorage.getItem('loginToken');
        this.isAuthenticated = true;
        // this.email = JSON.parse(window.localStorage.getItem('email'));
        this.user = JSON.parse(window.localStorage.getItem('user'));
    }

    login(email: string, password: string) {
        return new Observable((o: Observer<any>) => {
            this.http.post('http://localhost:8000/api/login', {
                'email': email,
                'password': password
            })
                .subscribe(
                (data: { token: string, user: User }) => {
                    window.localStorage.setItem('loginToken', data.token);
                    window.localStorage.setItem('user', JSON.stringify(data.user));
                    this.user = data.user;
                    // console.log(data.user);
                    this.isAuthenticated = true;

                    // window.localStorage.setItem('email', JSON.stringify(data.email));
                    // this.email=data.email;

                    o.next(data.token);
                    return o.complete();
                },
                (err) => {
                    return alert(`
                    Your login action has failed.
                    Please try again to login.`);
                }
                );
        });
    }

    public getRequestHeaders() {
        return new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
    }

    public logout(){
        window.localStorage.removeItem('loginToken');
        window.localStorage.removeItem('user');
        // window.localStorage.removeItem('email');
        this.isAuthenticated = false;
        this.router.navigateByUrl('/login');
    }

    public register(user: User) {
        return new Observable((o: Observer<any>) => {
            this.http.post('http://localhost:8000/api/register', {
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
                'password': user.password,
                // 'password_confirmation': user.confirmPassword,
            }).subscribe(
                (data: { token: string }) => {
                    // console.log('subscribe u auth(regist)')
                    this.isAuthenticated = true;
                    window.localStorage.setItem('loginToken', data.token);

                    o.next(data.token);
                    return o.complete();
                },
                (err) => {
                    return o.error(err);
                }
                );
        });
    }



}
