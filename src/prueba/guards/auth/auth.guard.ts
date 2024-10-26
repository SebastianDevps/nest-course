import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url)
    
    if (request.url === '/greet') return false; //como para proteger rutas porque nos tira 403 Forbiden

    return true;
  }
}
