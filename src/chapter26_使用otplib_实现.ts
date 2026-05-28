// 从第 26 章提取
// 代码清单: 使用otplib 实现 TOTP 2FA
// 文件名: chapter26_使用otplib_实现.ts
// 使用otplib 实现 TOTP 2FA
import { authenticator } from 'otplib';

const secret = authenticator.generateSecret();

// 生成二维码 URI
const qrCodeUrl = authenticator.keyuri(email, 'MyApp', secret);

// 验证 token
const isValid = authenticator.verify({
  token: userInputCode,
  secret: userSecret,
});
