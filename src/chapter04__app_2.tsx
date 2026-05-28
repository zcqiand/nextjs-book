// 从第 4 章提取
// 代码清单: pages/_app.tsx - Pages Router 的条件布局
// 文件名: chapter04__app_2.tsx
// pages/_app.tsx - Pages Router 的条件布局
export default function App({ Component, pageProps }) {
  const { showAdminLayout } = pageProps;

  return (
    <div className="app-wrapper">
      {showAdminLayout ? <AdminSidebar /> : <MainNav />}
      <main>
        <Component {...pageProps} />
      </main>
      {showAdminLayout ? null : <Footer />}
    </div>
  );
}
