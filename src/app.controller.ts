import { Controller, Get, Param } from '@nestjs/common';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('search/:q')
  async getSearchVideo(@Param('q') q: string) {
    const data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${
        process.env.YOUTUBE_API_KEY
      }&q=${encodeURI(q)}&part=snippet`,
    );
    return data.data.items;
  }
}
