import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
    @Prop()
    user: string

    @Prop()
    score: number;

    @Prop()
    scenario_name: string;

    @Prop()
    kill_count: string;

    @Prop()
    timestamp: Date;

    @Prop()
    weapon: string;

    @Prop()
    shots: number;

    @Prop()
    hits: number;

    @Prop()
    accuracy: number;

    @Prop()
    damage_done: number;

    @Prop()
    damage_possible: number;

    @Prop()
    efficiency: number;

    @Prop()
    sens_scale: string;

    @Prop()
    horiz_sens: number;

    @Prop()
    vert_sens: number;

    @Prop()
    fov: number;

    @Prop()
    fov_scale: string;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);

