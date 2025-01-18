import { PropsWithChildren } from 'react';

export default function HeroDescription({ children }: PropsWithChildren) {
  return <h2 className="text-lg text-frosted-glass xl:text-2xl xl:text-white">{children}</h2>;
}
