# 这不会影响 App Router 的功能，两者可以共存
mkdir -p pages
echo 'export default function OldIndex() { return <h1>这是 Pages Router 页面</h1> }' > pages/index.tsx