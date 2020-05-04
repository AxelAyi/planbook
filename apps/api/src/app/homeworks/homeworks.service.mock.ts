
import { Injectable } from '@nestjs/common';
import { Homework } from './models/homework.model';
import { GetHomeworksArgs } from './dto/homeworks.args';
import { homeworksMock } from '@planbook/api-interfaces';

@Injectable()
export class HomeworksServiceMock {
    async findOneById(id: string): Promise<Homework> {
        return homeworksMock.find(homework => homework.id === id);
    }

    async findAll(homeworksArgs: GetHomeworksArgs): Promise<Homework[]> {
        return homeworksMock.filter(homework => 
            (homeworksArgs.teacherId == null || homeworksArgs.teacherId === homework.teacherId)
            && (homeworksArgs.studentId == null || homeworksArgs.studentId === homework.studentId)
        );
    }
}