import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置 CORS
  app.enableCors({
    origin: ['http://localhost:5173'], // Vite 默认端口
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3000);
}

// 修改这里：添加错误处理
bootstrap().catch((error) => {
  console.error('启动服务器失败:', error);
  process.exit(1);
});
