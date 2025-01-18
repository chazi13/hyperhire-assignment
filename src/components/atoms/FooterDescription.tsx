import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export default function FooterDescription({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('text-sm font-extrablack text-muted', className)} {...props}>
      {children}
    </span>
  );
}
