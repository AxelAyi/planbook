
import { Injectable } from '@nestjs/common';
import { Member } from './models/member.model';
import { GetMembersArgs } from './dto/members.args';
import { membersMock } from '@planbook/api-interfaces';

@Injectable()
export class MembersServiceMock {
    async findOneById(id: string): Promise<Member> {
        return membersMock.find(member => member.id === id);
    }

    async findAll(membersArgs: GetMembersArgs): Promise<Member[]> {
        return membersMock.filter(member => 
            (membersArgs.isTeacher == null || member.isTeacher === membersArgs.isTeacher)
            && (membersArgs.teacherId == null || member.teacherIds?.includes(membersArgs.teacherId))
            && (membersArgs.ids == null || membersArgs.ids.includes(member.id))
        );
    }
}