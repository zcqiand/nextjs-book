// 发送事件（dashboard 微应用）
import { eventBus, EVENTS } from '@shared/events';

function handleAddToCart(product: Product) {
  addToCart(product);
  eventBus.emit(EVENTS.CART_UPDATED, { productId: product.id });
}

// 监听事件（shell 应用）
import { eventBus, EVENTS } from '@shared/events';

useEffect(() => {
  function handleCartUpdate(data: { productId: string }) {
    console.log('Cart updated:', data.productId);
    updateCartBadge();
  }

  eventBus.on(EVENTS.CART_UPDATED, handleCartUpdate);

  return () => {
    eventBus.off(EVENTS.CART_UPDATED, handleCartUpdate);
  };
}, []);