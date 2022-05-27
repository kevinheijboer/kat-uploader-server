import { IsBoolean, IsNotEmpty, IsString, IsNumber, IsDateString } from "class-validator";

export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    readonly user: string
    @IsNumber()
    @IsNotEmpty()
    readonly score: number;
    @IsString()
    @IsNotEmpty()
    readonly scenario_name: string;
    @IsString()
    @IsNotEmpty()
    readonly kill_count: string;
    @IsDateString()
    @IsNotEmpty()
    readonly timestamp: Date;
    @IsString()
    @IsNotEmpty()
    readonly weapon: string;
    @IsNumber()
    @IsNotEmpty()
    readonly shots: number;
    @IsNumber()
    @IsNotEmpty()
    readonly hits: number;
    @IsNumber()
    @IsNotEmpty()
    readonly accuracy: number;
    @IsNumber()
    @IsNotEmpty()
    readonly damage_done: number;
    @IsNumber()
    @IsNotEmpty()
    readonly damage_possible: number;
    @IsNumber()
    @IsNotEmpty()
    readonly efficiency: number;
    @IsString()
    @IsNotEmpty()
    readonly sens_scale: string;
    @IsNumber()
    @IsNotEmpty()
    readonly horiz_sens: number;
    @IsNumber()
    @IsNotEmpty()
    readonly vert_sens: number;
    @IsNumber()
    @IsNotEmpty()
    readonly fov: number;
    @IsString()
    @IsNotEmpty()
    readonly fov_scale: string;
}