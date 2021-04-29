import { Injectable } from "@angular/core";
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
	// constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		req = req.clone({
			setHeaders: {
				"x-rapidapi-key": "e798f6ec14msh1d4d06efed05fc1p15d5ccjsnbc90b3864939",
				"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
			},
			setParams: {
				key: "12dbfd1168b04d5c9eab5e31eef4a5b9"
			}
		});
		return next.handle(req);
	}
}
