import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoresModule } from './scores/scores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://katuploaderserver:4hf5IyqyHzKPX311@katuploader-cluster.ubl5v.mongodb.net/katuploader-db?retryWrites=true&w=majority'),
    ScoresModule
  ],
})
export class AppModule { }