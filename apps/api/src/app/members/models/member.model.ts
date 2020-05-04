import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IMember, IHomework } from '@planbook/api-interfaces';
import { Homework } from '../../homeworks/models/homework.model';

@ObjectType()
export class Member implements IMember {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ defaultValue: false })
  isTeacher?: boolean;

  teacherIds?: string[];

  @Field(type => [Member], { nullable: true })
  teachers?: IMember[];

  @Field(type => [Member], { nullable: true })
  students?: IMember[];

  @Field(type => [Homework], { nullable: true })
  homeworks?: IHomework[];
}