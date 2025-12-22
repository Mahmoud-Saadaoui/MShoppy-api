import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    // Name Validation
    @IsString({ message: 'Name must be a string' })
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    @MaxLength(30, { message: 'Name must be at most 30 characters long' })
    name: string;

    // Email Validation
    @IsNotEmpty({ message: 'Email is required' })
    @IsString({ message: 'Email must be a string' })
    @IsEmail({}, { message: 'Email must be a valid email' })
    email: string;

    // Password Validation
    @IsString({ message: 'Password must be a string' })
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @MaxLength(20, { message: 'Password must be at most 20 characters long' })
    password: string;

    // Role
    @IsNotEmpty({ message: 'Role is required' })
    @IsEnum(['user', 'admin'], {
        message: 'Role must be either user or admin',
    })
    role: 'user' | 'admin';

    // Avatar
    @IsOptional()
    @IsString({ message: 'Avatar must be a string' })
    @IsUrl({}, { message: 'Avatar must be a valid URL' })
    avatar?: string;

    // Age
    @IsOptional()
    @IsNumber({}, { message: 'Age must be a number' })
    age?: number;

    // Phone
    @IsOptional()
    @IsNumber({}, { message: 'Phone must be a number' })
    phone: number;

    // Address
    @IsOptional()
    @IsString({ message: 'Address must be a string' })
    address: string;

    // Active
    @IsOptional()
    @IsBoolean({ message: 'Active must be a boolean' })
    active: boolean;

    // Verification Code
    @IsOptional()
    @IsString({ message: 'Verification Code must be a string' })
    verificationCode: string;

    // Gender
    @IsOptional()
    @IsEnum(['male', 'female'], {
        message: 'Gender must be either male or female',
    })
    gender: 'male' | 'female';
}
