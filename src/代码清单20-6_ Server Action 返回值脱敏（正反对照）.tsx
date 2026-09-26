'use server';

// 演示用内存记录：真实项目里来自数据库查询
const userRecord = {
  id: 'm-001',
  name: '林一舟',
  passwordHash: 'sha256:9f2c8e',
  internalNote: '内部备注：仅管理端可见',
};

// 反例：整个对象原样返回，passwordHash 与 internalNote 会随序列化结果到达浏览器
export async function loadProfileBad() {
  return userRecord;
}

// 正例：只挑出页面真正要渲染的字段，敏感字段留在服务端
export async function loadProfile() {
  return { id: userRecord.id, name: userRecord.name };
}