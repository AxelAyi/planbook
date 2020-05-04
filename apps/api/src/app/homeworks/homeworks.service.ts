
import { Injectable } from '@nestjs/common';
import { Homework } from './models/homework.model';
import { GetHomeworksArgs } from './dto/homeworks.args';

@Injectable()
export class HomeworksService {
    async findOneById(id: string): Promise<Homework> {
        throw  "findOneById: Database call not implemented";
    }

    async findAll(homeworksArgs: GetHomeworksArgs): Promise<Homework[]> {
        throw  "findAll: Database call not implemented";
    }
}