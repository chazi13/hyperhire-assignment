import { PropsWithChildren } from 'react';
import Checkbox from '../atoms/Checkbox';

export default function Requirement({ children }: PropsWithChildren) {
  return (
    <div className="flex space-x-3">
      <Checkbox />
      <p className="text-white">{children}</p>
    </div>
  );
}
