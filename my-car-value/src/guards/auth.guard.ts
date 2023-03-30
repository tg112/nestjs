import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

// canActivate(): Return truthy value if user can access this route, false if not
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return request.session.userId;
  }
}
