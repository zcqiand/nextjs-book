// Pages Router - SSR（每个请求时重新渲染）
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

// Pages Router - SSG（构建时渲染一次）
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60, // ISR：后台重新验证间隔
  };
}

// Pages Router - getInitialProps（SSR + 客户端渲染）
// 合法用法是挂为页面组件的静态属性，会在服务端和客户端都执行，可能导致不一致
function TaskListPage({ data }) {
  return <div>{data.content}</div>;
}

TaskListPage.getInitialProps = async ({ pathname }) => {
  const data = await fetchDataByRoute(pathname);
  return { data };
};

export default TaskListPage;