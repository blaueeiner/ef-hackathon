import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class InternalApiKeyAuthGuard extends AuthGuard('internal-api-key') {}
