import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsEmail({}, { message: 'El email debe ser un correo electrónico válido.' })
    email?: string;

    @IsOptional()
    @IsString({ message: 'El nombre debe ser una cadena de texto.' })
    name?: string;

    @IsOptional()
    @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
    password?: string; 
}
