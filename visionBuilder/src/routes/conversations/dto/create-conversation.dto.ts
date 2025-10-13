import { IsString, IsNumber } from 'class-validator';

export class createConversationDto {
  @IsNumber()
  userId: Number

  @IsString()
  conversationName: String
}
