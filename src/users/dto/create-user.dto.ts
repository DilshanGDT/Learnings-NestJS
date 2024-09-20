export class CreateUserDto {
    name : string;
    email : string; 
    role : 'INTERN' | 'ENGINEER' | 'ADMIN';
}

// DTO - validation data after data recived