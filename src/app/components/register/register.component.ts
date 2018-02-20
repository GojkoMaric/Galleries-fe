import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {

    public user: User = new User();
    public errors: any[] = [];

    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    ngOnInit() {
    }

    public register() {

        this.auth.register(this.user).
            subscribe((user) => {
                
                this.auth.login(this.user.email, this.user.password)
                    .subscribe((token) => {
                        this.router.navigateByUrl('/login');
                    }, (e) => {
                        this.router.navigateByUrl('/');
                    });
                
            }, (e) => {
                let errorObjects = e.error.errors;
                let arrayOfErrors = Object.keys(errorObjects).map(key => {
                    return errorObjects[key][0];
                },
                    (err: HttpErrorResponse) => {
                        alert(`${err.error.error}`);
                    });
                this.errors = arrayOfErrors;
            });

    }
}

