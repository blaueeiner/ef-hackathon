import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly _configService: ConfigService) {}

  validateInternalApiKey(apiKey: string): boolean {
    const internalApiKey =
      this._configService.getOrThrow<string>('internalApiKey');

    return apiKey === internalApiKey;
  }
}
