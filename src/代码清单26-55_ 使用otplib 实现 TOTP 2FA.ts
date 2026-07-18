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