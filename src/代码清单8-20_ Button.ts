/* Button.module.css */
.base {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
}

.primary {
  background-color: #0070f3;
  color: white;
}

.secondary {
  background-color: #f5f5f5;
  color: #333;
}

.wrapper {
  composes: base; /* 复用 base 的样式 */
  margin-top: 1rem;
}