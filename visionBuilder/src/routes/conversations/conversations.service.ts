import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class conversationService {
    constructor(private readonly prisma: PrismaService) {}

    startConversation() {

    }


}