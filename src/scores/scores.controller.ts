import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { Score } from './schemas/score.schema';

@Controller('scores')
export class ScoresController {
    constructor(private readonly scoresService: ScoresService) { }

    @Post()
    async create(@Body() createScoreDto: CreateScoreDto): Promise<Score> {
        return this.scoresService.create(createScoreDto);
    }

    @Get()
    async findAll(): Promise<Score[]> {
        return this.scoresService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Score> {
        return this.scoresService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.scoresService.delete(id);
    }
}