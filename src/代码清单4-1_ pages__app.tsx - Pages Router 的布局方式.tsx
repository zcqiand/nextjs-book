// pages/_app.tsx - Pages Router 的布局方式
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 通过检查路由路径来决定使用哪种布局
  const isAdminPage = router.pathname.startsWith('/admin');

  return (
    <div className="app-wrapper">
      {isAdminPage ? <AdminSidebar /> : <MainNav />}
      <main>
        <Component {...pageProps} />
      </main>
      {isAdminPage ? null : <Footer />}
    </div>
  );
}