import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateScoreDto } from './dto/create-score.dto';
import { Score, ScoreDocument } from './schemas/score.schema';

@Injectable()
export class ScoresService {
    constructor(
        @InjectModel(Score.name) private readonly scoreModel: Model<ScoreDocument>,
    ) { }

    async create(createScoreDto: CreateScoreDto): Promise<Score> {
        const createdScore = await this.scoreModel.create(createScoreDto);
        return createdScore;
    }

    async findAll(): Promise<Score[]> {
        return this.scoreModel.find().exec();
    }

    async findOne(id: string): Promise<Score> {
        return this.scoreModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedScore = await this.scoreModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedScore;
    }
}