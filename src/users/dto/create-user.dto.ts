import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    // ID se genera automáticamente, no es necesario en el DTO
    // id: string;

    @IsEmail({}, { message: 'El email debe ser un correo electrónico válido.' })
    @IsNotEmpty({ message: 'El email es obligatorio.' })
    email: string;

    @IsOptional() // Este campo es opcional
    @IsString({ message: 'El nombre debe ser una cadena de texto.' })
    name?: string;

    @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
    @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
    @MinLength(8)
    password: string;

    // Fechas se manejan automáticamente, no son necesarias en el DTO
    // createdAt: Date;
    // updatedAt: Date;
}
