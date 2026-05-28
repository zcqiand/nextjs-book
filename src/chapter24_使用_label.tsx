// 从第 24 章提取
// 代码清单: 使用 label 关联表单元素
// 文件名: chapter24_使用_label.tsx
// 使用 label 关联表单元素
<label htmlFor="email">邮箱地址</label>
<input
  id="email"
  type="email"
  name="email"
  aria-describedby="email-help"
/>
<p id="email-help" className="text-sm text-gray-500">
  我们不会向第三方分享你的邮箱
</p>

// 如果必须使用自定义组件，使用 aria-labelledby
<div
  role="combobox"
  aria-labelledby="country-label"
  aria-describedby="country-help"
>
  <span id="country-label">国家/地区</span>
  <p id="country-help">选择你的所在国家</p>
</div>
