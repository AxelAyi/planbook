import { ArgsType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { PaginationArgs } from '../../common/pagination.args';

@ArgsType()
export class GetHomeworksArgs extends PaginationArgs {
    @Field({ nullable: true })
    teacherId?: string;

    @Field({ nullable: true })
    studentId?: string;
    
    @Field(type => GraphQLISODateTime, { nullable: true })
    minDate?: string;

    @Field(type => GraphQLISODateTime, { nullable: true })
    maxDate?: string;
}