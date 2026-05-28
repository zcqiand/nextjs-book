// 从第 29 章提取
// 代码清单: UserMenu 函数
// 文件名: chapter29_UserMenu.ts
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function UserMenu({ user, onLogout }: { user: User; onLogout: () => void }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2">
          <Avatar src={user.avatar} alt={user.name} />
          <span>{user.name}</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[180px] bg-white rounded-md shadow-lg p-1">
          <DropdownMenu.Item
            className="px-3 py-2 cursor-pointer hover:bg-gray-100 rounded"
            onSelect={() => router.push('/profile')}
          >
            个人资料
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="px-3 py-2 cursor-pointer hover:bg-gray-100 rounded"
            onSelect={() => router.push('/settings')}
          >
            设置
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
          <DropdownMenu.Item
            className="px-3 py-2 cursor-pointer hover:bg-gray-100 rounded text-red-600"
            onSelect={onLogout}
          >
            退出登录
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
