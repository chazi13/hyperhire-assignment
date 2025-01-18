import { PropsWithChildren } from 'react';
import HighlightLine from '../atoms/HighlightLine';

export default function HighlightCard({ children }: PropsWithChildren) {
  return (
    <div className="w-[160px]">
      <HighlightLine />
      {children}
    </div>
  );
}
