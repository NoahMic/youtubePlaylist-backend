import { Music } from '../schema/playlist.schema';

export class UpdatePlaylistDto {
  title: string;
  musics: Music[];
}
