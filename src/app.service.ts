import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey gang! Welcome to the NestJS crash course!';
  }
}
