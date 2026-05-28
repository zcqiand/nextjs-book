// 从第 28 章提取
// 代码清单: UserProfile 函数
// 文件名: chapter28_UserProfile.ts
const userAtom = atom(null);
const userLoaderAtom = atom(
  (get) => get(userAtom),
  async (get, set, userId: string) => {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    set(userAtom, user);
  }
);

function UserProfile({ userId }: { userId: string }) {
  const [user, loadUser] = useAtom(userLoaderAtom);

  useEffect(() => {
    loadUser(userId);
  }, [userId, loadUser]);

  if (!user) return <div>加载中...</div>;
  return <div>{user.name}</div>;
}
