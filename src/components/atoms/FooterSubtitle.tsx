import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export default function FooterSubtitle({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-xs text-footer-subtitle', className)} {...props}>
      {children}
    </p>
  );
}
