import { Injectable,Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let isAuthAPI: boolean;

        // Determine if the request is to an authentication API endpoint
        if (request.url.startsWith('login') || request.url.startsWith('register')) {
            isAuthAPI = true;
        } else {
            isAuthAPI = false;
        }

        // Attach the JWT token to the header if the user is logged in and not requesting an auth endpoint
        if (this.authenticationService.isLoggedIn() && !isAuthAPI) {
            let token = this.authenticationService.getToken();
            const authReq = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });

            return next.handle(authReq);
        }

        // Forward the request without modification
        return next.handle(request);
    }
}

export const authInterceptProvider: Provider =
{ provide: HTTP_INTERCEPTORS,
useClass: JwtInterceptor, multi: true };
