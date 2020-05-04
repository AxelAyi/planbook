import { Field, ObjectType, ID, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { IHomework } from '@planbook/api-interfaces';

@ObjectType()
export class Homework implements IHomework {
  @Field(type => ID)
  id: string;

  @Field()
  teacherId: string;

  @Field()
  studentId: string;

  @Field()
  description: string;

  @Field(type => GraphQLISODateTime, { nullable: true })
  appointmentDate?: Date;
}