import { existsSync } from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

// ⚠️ 第一件事：把项目根目录 .env 里的变量读进 process.env
// 必须在创建 Nest 应用之前执行，否则 PrismaService 拿到的 DATABASE_URL 是 undefined，
// pg 会退回默认值（本机 + 系统用户名），报 database "edwards" does not exist
// Node 20.12+ 自带 process.loadEnvFile，不需要额外装库
if (existsSync('.env')) {
  process.loadEnvFile();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
