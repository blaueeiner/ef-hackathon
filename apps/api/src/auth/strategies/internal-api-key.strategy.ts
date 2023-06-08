import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class InternalApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'internal-api-key',
) {
  constructor(private readonly _authService: AuthService) {
    super({ header: 'x-api-key', prefix: '' }, false, async (apiKey, done) => {
      const isValid = this._authService.validateInternalApiKey(apiKey);

      if (!isValid) {
        return done(new UnauthorizedException(), false);
      }

      return done(null, true);
    });
  }
}
