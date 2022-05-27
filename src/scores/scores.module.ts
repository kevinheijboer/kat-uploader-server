import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { Score, ScoreSchema } from './schemas/score.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Score.name, schema: ScoreSchema }])],
    controllers: [ScoresController],
    providers: [ScoresService],
})
export class ScoresModule { }