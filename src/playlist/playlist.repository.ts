import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Playlist, PlaylistDocument } from './schema/playlist.schema';

@Injectable()
export class PlaylistRepository {
  constructor(
    @InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>,
  ) {}

  async findOne(playlistFilterQuery: FilterQuery<Playlist>): Promise<Playlist> {
    return this.playlistModel.findOne(playlistFilterQuery);
  }

  async find(playlistFilterQuery: FilterQuery<Playlist>): Promise<Playlist[]> {
    return this.playlistModel.find(playlistFilterQuery);
  }

  async create(playlist: Playlist): Promise<Playlist> {
    const newPlaylist = new this.playlistModel(playlist);
    return newPlaylist.save();
  }

  async findOneAndUpdate(
    playlistFilterQuery: FilterQuery<Playlist>,
    playlist: Partial<Playlist>,
  ): Promise<Playlist> {
    return this.playlistModel.findOneAndUpdate(playlistFilterQuery, playlist);
  }
}
