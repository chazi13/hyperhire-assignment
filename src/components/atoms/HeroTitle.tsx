import { PropsWithChildren } from 'react';

export default function HeroTitle({ children }: PropsWithChildren) {
  return <h1 className="text-4xl leading-dense text-white lg:text-5xl lg:leading-default">{children}</h1>;
}
