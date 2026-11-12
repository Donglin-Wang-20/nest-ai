import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    globals: true,
    root: './',
    include: ['**/*.e2e-spec.ts'],
    // e2e 会真的启动 AppModule，同样要先加载 .env
    setupFiles: ['./test/setup.ts'],
  },
});
