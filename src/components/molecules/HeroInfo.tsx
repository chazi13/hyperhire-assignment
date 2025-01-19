'use client';

import Link from 'next/link';
import ChatBubble from '../atoms/ChatBubble';
import HeroDescription from '../atoms/HeroDescription';
import HeroTitle from '../atoms/HeroTitle';
import { useState, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import ChatBubbleCaret from '../atoms/ChatBubbleCaret';

export default function HeroInfo() {
  const [parentRef] = useAutoAnimate({
    duration: 500,
  });

  const [showBubble, setShowBubble] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 50);
    setTimeout(() => setShowBubble(true), 300);
  }, []);

  return (
    <div ref={parentRef} className="max-w-[640px] space-y-4 px-4">
      {showBubble && (
        <div className="animate-fadeIn pb-2">
          <ChatBubble>
            <span className="text-white xl:text-aqua">풀타임, 파트타임</span> <ChatBubbleCaret />
          </ChatBubble>
        </div>
      )}
      {showTitle && (
        <>
          <div className="animate-fadeInUp">
            <HeroTitle>
              최고의 실력을 가진
              <br /> 외국인 인재를 찾고 계 신가요?
            </HeroTitle>
          </div>
          <div className="animate-fadeIn xl:w-[360px]">
            <HeroDescription>법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</HeroDescription>
          </div>
          <div className="!mt-6 hidden animate-fadeIn xl:block">
            <Link href="#" className="text-lg text-white underline">
              개발자가 필요하신가요?
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
