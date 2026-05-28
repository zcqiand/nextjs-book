// 从第 8 章提取
// 代码清单: Responsive
// 文件名: chapter08_Responsive.ts
/* Responsive.module.css */
.container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
