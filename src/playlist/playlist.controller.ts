import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlis.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PlaylistService } from './playlist.service';
import { Playlist } from './schema/playlist.schema';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get(':playlistId')
  async getPlaylist(
    @Param('playlistId') playlistId: string,
  ): Promise<Playlist> {
    return this.playlistService.getPlaylistById(playlistId);
  }

  @Get()
  async getPlaylists(): Promise<Playlist[]> {
    return this.playlistService.getPlaylist();
  }

  @Post()
  async createPlaylist(
    @Body() createPlaylistDto: CreatePlaylistDto,
  ): Promise<Playlist> {
    return this.playlistService.createPlaylist(
      createPlaylistDto.title,
      createPlaylistDto.musics,
    );
  }

  @Patch(':playlistId')
  async updatePlaylist(
    @Param('playlistId') playlistId: string,
    @Body() updatePlaylistDto: UpdatePlaylistDto,
  ): Promise<Playlist> {
    return this.playlistService.updatePlaylist(playlistId, updatePlaylistDto);
  }
}
