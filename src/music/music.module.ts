import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MusicController } from './music.controller';
import { MusicRepository } from './music.repository';
import { MusicService } from './music.service';
import { Music, MusicSchema } from './schema/music.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Music.name, schema: MusicSchema }]),
  ],
  controllers: [MusicController],
  providers: [MusicService, MusicRepository],
})
export class MusicModule {}
