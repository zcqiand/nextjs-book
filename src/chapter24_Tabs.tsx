// 从第 24 章提取
// 代码清单: Tabs 函数
// 文件名: chapter24_Tabs.tsx
function Tabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div role="tablist">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          role="tab"
          id={`tab-${tab.id}`}
          aria-selected={index === activeTab}
          aria-controls={`panel-${tab.id}`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function TabPanel({ tab, children }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      id={`panel-${tab.id}`}
      aria-labelledby={`tab-${tab.id}`}
    >
      {children}
    </div>
  );
}
