import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    name: string;

    @IsInt()
    @Min(1)
    price: number;

    @IsOptional()
    @IsString() // 値がある場合
    @MaxLength(1000) // 値がある場合
    description: string;
};
