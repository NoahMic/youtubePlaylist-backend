import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaylistDocument = Playlist & Document;
export class Music {
  id: string;
  musicId: string;
  title: string;
}

@Schema()
export class Playlist {
  @Prop()
  playlistId: string;

  @Prop()
  title: string;

  @Prop()
  playlistImg: string;

  @Prop([Music])
  musics: Music[];
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
