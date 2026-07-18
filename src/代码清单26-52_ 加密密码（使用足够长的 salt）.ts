import { hash, compare } from 'bcryptjs';

// 加密密码（使用足够长的 salt）
const hashedPassword = await hash(password, 12); // 12 轮迭代

// 验证密码
const isValid = await compare(inputPassword, storedPassword);