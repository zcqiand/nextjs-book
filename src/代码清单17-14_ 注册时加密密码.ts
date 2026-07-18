import { hash, compare } from 'bcryptjs';

// 注册时加密密码
const hashedPassword = await hash(password, 12);

// 登录时验证密码
const isValid = await compare(inputPassword, storedPassword);