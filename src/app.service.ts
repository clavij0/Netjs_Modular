import { Injectable, Inject } from '@nestjs/common';
//import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@nestjs/config';
import config from './config';
//import { config } from 'process';

@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    //private config: ConfigService
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    ) { }
  getHello(): string {
    //console.log(this.tasks);
    //const apikey = this.config.get<string>('API_KEY');
    const apikey = this.configService.apikey;
    //const name = this.config.get('DATABASE_NAME');
    const name = this.configService.database.name;
    return `Hello World! ${apikey} ${name}`;
  }
}
