import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmartkDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }
  createBookmark(userId: number, dto: CreateBookmarkDto) {}
  getBookmarkById(userId: number, bookmarkId: number) {}
  editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmartkDto) {}
  deleteBookmarkById(userId: number, bookmarkId: number) {}
}
