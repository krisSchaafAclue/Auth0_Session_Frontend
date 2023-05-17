# TODOs

## app.module.ts

```typescript
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';

//imports
AuthModule.forRoot({
    ...env.auth,
    httpInterceptor: {
    ...env.httpInterceptor,
    },
}),
//providers
providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
}]
```

## environment.ts

```typescript
 auth: {
    domain: "kristoffer-schaaf-aclue.us.auth0.com",
    clientId: "TL59OmwzR2oBBShaRBDtvF0TJjgtPU1J",
    audience: "https://auth0-aclue-api.com",
    redirectUri: "http://localhost:4200/",
    errorPath: "/error",
  },
  httpInterceptor: {
    allowedList: [`${apiUri}*`],
  },
```

## app-routing.module.ts

```typescript
import { AuthGuard } from '@auth0/auth0-angular';

//Routers
  { path: 'addCustomer', component: AddCustomerComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomerGridComponent, canActivate: [AuthGuard] },
  { path: 'customer', component: ShowCustomerComponent, canActivate: [AuthGuard] },
```

## header.component.ts

```typescript
import { AuthService } from '@auth0/auth0-angular';

constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}
  
ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((result) => {
      this.isLoggedIn = result;
    })
}

loginWithRedirect() {
    this.auth.loginWithRedirect();
}

logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
}
```
