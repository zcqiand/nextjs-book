// 严格解析，不允许未知字段
const StrictUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
}).strict(); // 拒绝未知字段

// 解析并转换类型
const NumberSchema = z.coerce.number();

NumberSchema.parse('42');    // 42 (string → number)
NumberSchema.parse('hello'); // throws ZodError