import { ArgsType, Field } from '@nestjs/graphql';
import { PaginationArgs } from '../../common/pagination.args';

@ArgsType()
export class GetMembersArgs extends PaginationArgs {
    @Field({ nullable: true })
    isTeacher?: boolean;

    @Field({ nullable: true })
    teacherId?: string;

    @Field(type => [String], { nullable: true })
    ids?: string[];
}