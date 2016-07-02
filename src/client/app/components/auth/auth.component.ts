import { OnInit } from '@angular/core';
import { BaseComponent } from '../../frameworks/core.framework/index';

import { Store } from '@ngrx/store';

import { AuthService } from '../../frameworks/app.framework/services/auth';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-auth',
  templateUrl : `auth.component.html`,
  styleUrls: ['auth.component.css']  
})
export class AuthComponent implements OnInit {
    constructor(private store: Store<any>,
                public authService: AuthService) {
        //console.log(this.authService);                    
        //this.login();
        this.login();
        console.log('sabe');
    };

    login(credentials?: any) : void {
        this.authService.login(credentials);
        console.log(this.authService);
    }

    ngOnInit() {
        console.log(1, this);
    }
}