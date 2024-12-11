import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OcupadoService } from '../_services/ocupado.service';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private ocupadoService: OcupadoService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.ocupadoService.ocupado();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => this.ocupadoService.desocupado()) 
    );
  }
}
