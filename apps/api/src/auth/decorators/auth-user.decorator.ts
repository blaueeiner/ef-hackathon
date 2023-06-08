import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export const AuthUser = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const { user } = ctx.switchToHttp().getRequest();
    return user as DecodedIdToken;
  },
);
