'use client';

import { useAnimatedCounter } from '@/hooks';

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
  active?: boolean;
}

export default function AnimatedCounter({ end, suffix = '', duration = 2000, active = false }: Props) {
  const count = useAnimatedCounter(end, duration, active);
  return <>{count.toLocaleString()}{suffix}</>;
}
