/* components/Modal.module.css */
.overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal {
  transform: scale(0.95) translateY(20px);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* 动画激活状态 */
.overlay.visible {
  opacity: 1;
}

.modal.visible {
  transform: scale(1) translateY(0);
}