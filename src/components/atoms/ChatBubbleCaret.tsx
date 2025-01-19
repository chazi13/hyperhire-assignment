import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const chatBubbleCaretVariants = cva('absolute', {
  variants: {
    variant: {
      default: '[&_div]:border-t-sky xl:[&_div]:border-t-white',
      success: '[&_div]:border-t-success-foreground',
    },
    position: {
      left: 'left-0 top-[96%] ml-2.5',
      center: 'top-[96%] left-1/2 -translate-x-1/2',
    },
  },
  defaultVariants: {
    variant: 'default',
    position: 'left',
  },
});

export default function ChatBubbleCaret({
  variant,
  position,
  className,
  ...props
}: HTMLAttributes<Omit<HTMLDivElement, 'children'>> & VariantProps<typeof chatBubbleCaretVariants>) {
  return (
    <div className={cn(chatBubbleCaretVariants({ variant, position, className }))} {...props}>
      <div className="border-x-8 border-b-0 border-t-[12px] border-solid border-transparent"></div>
    </div>
  );
}
