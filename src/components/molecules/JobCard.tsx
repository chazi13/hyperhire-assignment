import { PropsWithChildren } from 'react';

export default function JobCard({ children }: PropsWithChildren) {
  return <div className="flex min-w-[332px] items-center gap-6 rounded-xl bg-glass p-4 text-white">{children}</div>;
}
