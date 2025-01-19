import { PropsWithChildren } from 'react';

export default function Badge({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center rounded-md border border-muted-foreground px-3 py-1">
      <span className="mt-1 text-sm text-muted xl:text-base">{children}</span>
    </div>
  );
}
