// src/app/actions/checkout.ts
'use server';

import { z } from 'zod';
import { cartService } from '@/lib/services/cart';
import { orderService } from '@/lib/services/order';

const Step1Schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

const Step2Schema = z.object({
  address: z.string().min(10),
  city: z.string().min(2),
  zipCode: z.string().regex(/^\d{5,6}$/),
});

const Step3Schema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/),
  cvv: z.string().regex(/^\d{3,4}$/),
});

export async function submitCheckoutStep1(data: z.infer<typeof Step1Schema>) {
  const result = Step1Schema.safeParse(data);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  await cartService.setCustomerInfo(result.data);
  return { success: true };
}

export async function submitCheckoutStep2(data: z.infer<typeof Step2Schema>) {
  const result = Step2Schema.safeParse(data);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  await cartService.setShippingAddress(result.data);
  return { success: true };
}

export async function submitCheckoutStep3(data: z.infer<typeof Step3Schema>) {
  const result = Step3Schema.safeParse(data);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // 验证支付信息
  const paymentValid = await paymentService.validate(result.data);
  if (!paymentValid) {
    return { success: false, errors: { payment: ['支付验证失败'] } };
  }

  // 创建订单
  const order = await orderService.createFromCart();

  return { success: true, orderId: order.id };
}