import { ArgsType, Field, Int } from "@nestjs/graphql";
import { Min } from "class-validator";

@ArgsType()
export class PaginationArgs {
    @Field((type) => Int)
    @Min(0)
    skip: number = 0;

    @Field((type) => Int)
    @Min(1)
    take: number = 10;
}