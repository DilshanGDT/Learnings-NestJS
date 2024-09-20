import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types"

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    // we already validates data in create user dto
    // so with extends we dont need to validate dto here again
}