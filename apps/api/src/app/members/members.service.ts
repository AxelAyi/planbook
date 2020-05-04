
import { Injectable } from '@nestjs/common';
import { Member } from './models/member.model';
import { GetMembersArgs } from './dto/members.args';

@Injectable()
export class MembersService {
    async findOneById(id: string): Promise<Member> {
        throw  "findOneById: Database call not implemented";
    }

    async findAll(membersArgs: GetMembersArgs): Promise<Member[]> {
        throw  "findAll: Database call not implemented";
    }
}