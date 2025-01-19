import Image, { ImageProps } from 'next/image';

export default function Avatar({ src, alt, ...props }: Omit<ImageProps, 'width' | 'height'>) {
  return (
    <div className="h-16 w-16 overflow-hidden rounded-full xl:h-[120px] xl:w-[120px]">
      <Image src={src} alt={alt} width={120} height={120} {...props} />
    </div>
  );
}
