import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicService } from './music.service';
import { Music } from './schema/music.schema';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get(':musicId')
  async getMusic(@Param('musicId') musicId: string): Promise<Music> {
    return this.musicService.getMusicById(musicId);
  }

  @Get()
  async getMusics(): Promise<Music[]> {
    return this.musicService.getMusic();
  }

  @Post()
  async createMusic(@Body() createMusicDto: CreateMusicDto): Promise<Music> {
    return this.musicService.createMusic(
      createMusicDto.title,
      createMusicDto.musicId,
      createMusicDto.thumbnail,
    );
  }

  @Patch(':playlistId')
  async updatePlaylist(
    @Param('playlistId') playlistId: string,
    @Body() updateMusicDto: UpdateMusicDto,
  ): Promise<Music> {
    return this.musicService.updateMusic(playlistId, updateMusicDto);
  }
}
