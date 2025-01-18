import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';

export default function Logo({ alt, className, src, ...props }: ImageProps) {
  return (
    <div className={cn('my-5 h-[1.313] w-[7.125rem]', className)}>
      <Image src={src} alt={alt} width={114} height={21} {...props} />
    </div>
  );
}
