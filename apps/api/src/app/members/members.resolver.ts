import { Resolver, Query, ResolveField, Args, Int, Parent } from "@nestjs/graphql";
import { Member } from './models/member.model';
import { MembersService } from './members.service';
import { HomeworksService } from '../homeworks/homeworks.service';
import { GetMembersArgs } from './dto/members.args';
import { Homework } from '../homeworks/models/homework.model';
import { GetHomeworksArgs } from '../homeworks/dto/homeworks.args';

@Resolver(of => Member)
export class MembersResolver {
  constructor(
    private membersService: MembersService,
    private homeworksService: HomeworksService
  ) {}

  @Query(returns => Member, { name: 'member', description: "Gets a member", nullable: true })
  async getMember(@Args('id') id: string) {
    return this.membersService.findOneById(id);
  }

  @Query(returns => [Member], { name: 'members', description: "Get all members"})
  async getMembers(@Args() membersArgs: GetMembersArgs): Promise<Member[]> {
    return this.membersService.findAll(membersArgs);
  }

  @ResolveField('students', returns => [Member])
  async getStudents(@Parent() member: Member, @Args() getMembersArgs: GetMembersArgs) {
    getMembersArgs.teacherId = member.id;
    return this.membersService.findAll(getMembersArgs);
  }

  @ResolveField('teachers', returns => [Member])
  async getTeachers(@Parent() member: Member, @Args() getMembersArgs: GetMembersArgs) {
    getMembersArgs.ids = member.teacherIds;
    return this.membersService.findAll(getMembersArgs);
  }

  @ResolveField('homeworks', returns => [Homework])
  async getSlots(@Parent() member: Member, @Args() homeworksArgs: GetHomeworksArgs) {
    homeworksArgs.studentId = member.id;
    return this.homeworksService.findAll(homeworksArgs);
  }
}