// 从第 24 章提取
// 代码清单: 有意义的图片需要描述
// 文件名: chapter24_有意义的图片需要描述.ts
// 有意义的图片需要描述
<Image
  src="/team-photo.jpg"
  alt="团队成员合影，左起：张三（前端）、李四（后端）、王五（设计师）"
  width={800}
  height={600}
/>

// 装饰性图片使用空 alt
<Image
  src="/decorative-pattern.svg"
  alt=""
  className="bg-pattern"
/>

// 复杂图片使用 longdesc 或 aria-describedby
<figure>
  <img src="/chart.png" alt="销售趋势图" aria-describedby="chart-desc" />
  <figcaption id="chart-desc">
    2024 年 Q1 销售额为 100 万，Q2 增长至 120 万，Q3 达到 150 万，Q4 回落至 130 万。
  </figcaption>
</figure>
