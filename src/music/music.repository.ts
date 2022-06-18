import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Music, MusicDocument } from './schema/music.schema';

@Injectable()
export class MusicRepository {
  constructor(
    @InjectModel(Music.name) private MusicModel: Model<MusicDocument>,
  ) {}

  async findOne(musicFilterQuery: FilterQuery<Music>): Promise<Music> {
    return this.MusicModel.findOne(musicFilterQuery);
  }

  async find(musicFilterQuery: FilterQuery<Music>): Promise<Music[]> {
    return this.MusicModel.find(musicFilterQuery);
  }

  async create(Music: Music): Promise<Music> {
    const newMusic = new this.MusicModel(Music);
    return newMusic.save();
  }

  async findOneAndUpdate(
    musicFilterQuery: FilterQuery<Music>,
    Music: Partial<Music>,
  ): Promise<Music> {
    return this.MusicModel.findOneAndUpdate(musicFilterQuery, Music);
  }
}
