import { Injectable, OnModuleInit } from '@nestjs/common';
import Knex from 'knex';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KnexService implements OnModuleInit {
  public knex;

  constructor(private configService: ConfigService) { }

  onModuleInit() {
    this.knex = Knex({
      client: 'pg',
      connection: {
        host: this.configService.get('DATABASE_HOST'),
        user: this.configService.get('DATABASE_USER'),
        password: this.configService.get('DATABASE_PASSWORD'),
        database: this.configService.get('DATABASE_NAME'),
        port: this.configService.get('DATABASE_PORT'),
      },
    });
  }
}
