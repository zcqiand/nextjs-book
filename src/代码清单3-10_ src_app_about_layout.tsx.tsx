// src/app/about/layout.tsx
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '2rem' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        {children}
      </div>
    </div>
  );
}