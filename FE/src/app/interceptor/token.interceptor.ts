import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token')!;
        let tokenizerReq = req.clone({
            setHeaders: {
                // Authorization: 'Bearer xx.yy.zz' (for testing)
                Authorization: token
            }
        // we catch the request then set the Athorization to the request 
        });
        return next.handle(tokenizerReq);

        // after that we use next.handle to use the new request that we have add the token 
    }
}

