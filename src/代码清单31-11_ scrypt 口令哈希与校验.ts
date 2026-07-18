const KEY_LEN = 64;
const SALT_LEN = 16;
const N = 16384;

export async function hashPassword(plain: string): Promise<string> {
  const salt = randomBytes(SALT_LEN);
  const derived = await scrypt(plain, salt, KEY_LEN, { N });
  return `scrypt:${N}:${salt.toString("base64")}:${derived.toString("base64")}`;
}

export async function verifyPassword(plain: string, stored: string): Promise<boolean> {
  const parts = stored.split(":");
  if (parts.length !== 4 || parts[0] !== "scrypt") return false;
  const version = parts[1];
  const saltStr = parts[2];
  const hashStr = parts[3];
  if (version === undefined || saltStr === undefined || hashStr === undefined) return false;
  const n = Number(version);
  if (!Number.isInteger(n) || n <= 0) return false;
  const salt = Buffer.from(saltStr, "base64");
  const expected = Buffer.from(hashStr, "base64");
  const derived = await scrypt(plain, salt, expected.length, { N: n });
  if (derived.length !== expected.length) return false;
  return timingSafeEqual(derived, expected);
}