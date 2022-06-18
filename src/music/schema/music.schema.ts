import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MusicDocument = Music & Document;

@Schema()
export class Music {
  @Prop()
  id: string;

  @Prop()
  musicId: string;

  @Prop()
  title: string;

  @Prop()
  thumbnail: string;

  @Prop([String])
  playlists: string[];
}

export const MusicSchema = SchemaFactory.createForClass(Music);
