'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import HighlightCard from '../molecules/HighlightCard';
import { useState, useEffect } from 'react';

const highlights = [
  {
    title: '평균 월 120만원',
    description: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    title: '최대 3회 인력교체',
    description: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
  },
  {
    title: '평균 3일, 최대 10일',
    description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

export default function Highlights() {
  const [parentRef] = useAutoAnimate({
    duration: 500,
  });

  const [showHighlights, setShowHighlights] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHighlights(true), 50);
  }, []);

  return (
    <div ref={parentRef} className="mt-15 hidden max-w-[640px] justify-between xl:flex">
      {showHighlights &&
        highlights.map((feature) => (
          <HighlightCard key={feature.title}>
            <h3 className="mb-2 text-lg text-white">{feature.title}</h3>
            <p className="text-frosted-glass">{feature.description}</p>
          </HighlightCard>
        ))}
    </div>
  );
}
