import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardIconVariants = cva('justify-center items-center flex', {
  variants: {
    size: {
      default: 'w-12 h-12 rounded',
      sm: 'w-10 h-10 rounded-lg',
      lg: 'w-14 h-14 rounded-xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export default function CardIcon({
  children,
  className,
  size,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardIconVariants>) {
  return (
    <div className={cn(cardIconVariants({ size }), className)} {...props}>
      {children}
    </div>
  );
}
