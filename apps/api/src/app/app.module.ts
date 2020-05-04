import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { HomeworksModule } from './homeworks/homeworks.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    MembersModule,
    HomeworksModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
