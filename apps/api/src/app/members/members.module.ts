import { Module } from '@nestjs/common';
import { HomeworksModule } from '../homeworks/homeworks.module';
import { MembersService } from './members.service';
import { HomeworksService } from '../homeworks/homeworks.service';
import { HomeworksServiceMock } from '../homeworks/homeworks.service.mock';
import { MembersServiceMock } from './members.service.mock';
import { MembersResolver } from './members.resolver';

@Module({
    imports:[HomeworksModule],
    providers: [
        { 
            provide: MembersService,
            useClass: MembersServiceMock
        },
        {
            provide: HomeworksService,
            useClass: HomeworksServiceMock
        },
        MembersResolver
    ],
})
export class MembersModule {}
