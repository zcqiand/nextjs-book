// lib/services/container.ts
class Container {
  private services = new Map();

  register<T>(key: string, factory: () => T) {
    this.services.set(key, factory);
  }

  get<T>(key: string): T {
    const factory = this.services.get(key);
    if (!factory) {
      throw new Error(`Service ${key} not found`);
    }
    return factory();
  }
}

export const container = new Container();

// 注册服务
container.register('db', () => new PrismaClient());
container.register('mailer', () => new SendGridMailer());
container.register('storage', () => new S3Storage());