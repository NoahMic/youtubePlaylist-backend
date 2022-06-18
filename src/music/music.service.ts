import { Injectable } from '@nestjs/common';
import { MusicRepository } from './music.repository';
import { Music } from './schema/music.schema';
import { v4 as uuidv4 } from 'uuid';
import { UpdateMusicDto } from './dto/update-music.dto';

@Injectable()
export class MusicService {
  constructor(private readonly musicRepository: MusicRepository) {}

  async getMusicById(musicId: string): Promise<Music> {
    return this.musicRepository.findOne({ musicId });
  }

  async getMusic(): Promise<Music[]> {
    return this.musicRepository.find({});
  }

  async createMusic(
    title: string,
    musicId: string,
    thumbnail: string,
  ): Promise<Music> {
    return this.musicRepository.create({
      id: uuidv4(),
      title,
      musicId,
      thumbnail,
      playlists: [],
    });
  }

  async updateMusic(id: string, musicUpdates: UpdateMusicDto): Promise<Music> {
    return this.musicRepository.findOneAndUpdate({ id }, musicUpdates);
  }
}
