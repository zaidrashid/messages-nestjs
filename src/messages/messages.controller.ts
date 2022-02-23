import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('list');
    return 'list';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('create', body);
    return 'create';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('get', id);
    return 'get';
  }
}
