import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_KEY),
    PlaylistModule,
    MusicModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//seey47k9juvmfmiq
