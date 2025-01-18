import { PropsWithChildren } from 'react';

export default function ServiceCard({ children }: PropsWithChildren) {
  return <div className="flex flex-col rounded-xl bg-white p-4">{children}</div>;
}
