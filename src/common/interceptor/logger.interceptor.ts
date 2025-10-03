import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    console.log('Request Params:', req.params);
    console.log('Request Body:', req.body);
    console.log('Request URL:', req.originalUrl);
    console.log('Request Time:', new Date().toLocaleString());
    console.log('');
    return next.handle().pipe(tap(() => {}));
  }
}
