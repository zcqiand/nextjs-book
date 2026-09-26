'use client';

import { useRouter } from 'next/navigation';

export default function OnboardingNextButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.replace('/onboarding/done')}>
      完成设置向导
    </button>
  );
}