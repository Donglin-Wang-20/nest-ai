// 测试环境也加载 .env，跟 src/main.ts 里的运行时行为保持一致
// 这样 PrismaService 在测试里被构造时，不会因为读不到 DATABASE_URL 而报错
import { existsSync } from 'node:fs';

if (existsSync('.env')) {
  process.loadEnvFile();
}
