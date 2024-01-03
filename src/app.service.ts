import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHi(): string {
    return 'Hello EveryOne';  
}
  getHello(): string {
    return 'Hello World!';
  }
}
