import { PropsWithChildren } from 'react';

export default function ChatBubble({ children }: PropsWithChildren) {
  return (
    <div className="pb-3.5">
      <div className="relative w-fit rounded-lg bg-[#8BC4FF] px-3 py-1.5 xl:bg-white">
        <p className="text-lg text-white xl:text-[#40E2E8]">{children}</p>
        <div className="absolute left-0 top-full ml-2.5">
          <div className="border-x-8 border-b-0 border-t-[12px] border-solid border-transparent border-t-[#8BC4FF] xl:border-t-white"></div>
        </div>
      </div>
    </div>
  );
}
