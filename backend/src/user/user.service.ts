import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(data: RegisterDto) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    try {
      return await this.prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          passwordHash,
          tel: data.tel,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        // Prisma error: unique constraint failed
        throw new ConflictException('Email, username, or tel already exists');
      }
      throw error;
    }
  }

  async login(data: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user || !(await bcrypt.compare(data.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { message: 'Login successful', user };
  }
}