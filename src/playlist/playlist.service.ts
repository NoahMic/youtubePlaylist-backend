import { Injectable } from '@nestjs/common';
import { PlaylistRepository } from './playlist.repository';
import { Music, Playlist } from './schema/playlist.schema';
import { v4 as uuidv4 } from 'uuid';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Injectable()
export class PlaylistService {
  constructor(private readonly playlistRepository: PlaylistRepository) {}

  async getPlaylistById(playlistId: string): Promise<Playlist> {
    return this.playlistRepository.findOne({ playlistId });
  }

  async getPlaylist(): Promise<Playlist[]> {
    return this.playlistRepository.find({});
  }

  async createPlaylist(title: string, musics: Music[]): Promise<Playlist> {
    return this.playlistRepository.create({
      playlistId: uuidv4(),
      title,
      musics,
      playlistImg: 'https://i.ytimg.com/vi/PEnJbjBuxnw/default.jpg',
    });
  }

  async updatePlaylist(
    playlistId: string,
    playlistUpdates: UpdatePlaylistDto,
  ): Promise<Playlist> {
    return this.playlistRepository.findOneAndUpdate(
      { playlistId },
      playlistUpdates,
    );
  }
}
