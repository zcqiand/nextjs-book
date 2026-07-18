// app/dashboard/page.tsx
import { headers } from 'next/headers';

export default async function DashboardPage() {
  const flags = (await headers()).get('x-ff-new-dashboard');
  const showNewDashboard = flags === 'true';

  return showNewDashboard ? <NewDashboard /> : <OldDashboard />;
}