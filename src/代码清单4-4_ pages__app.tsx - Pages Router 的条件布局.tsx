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