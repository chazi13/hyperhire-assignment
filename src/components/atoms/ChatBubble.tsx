import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

export const chatBubbleVariants = cva('relative w-fit rounded-lg px-3 py-1.5', {
  variants: {
    variant: {
      default: 'bg-sky xl:bg-white',
      success: 'bg-success-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function ChatBubble({
  variant,
  className,
  children,
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof chatBubbleVariants>) {
  return <div className={cn(chatBubbleVariants({ variant, className }))}>{children}</div>;
}
