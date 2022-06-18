import { Music } from '../schema/playlist.schema';

export class CreatePlaylistDto {
  title: string;
  musics: Music[];
}
