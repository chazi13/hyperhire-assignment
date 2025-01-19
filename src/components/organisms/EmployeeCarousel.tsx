'use client';

// import EmployeeCard from '../molecules/EmployeeCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Employee } from '@/types';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import EmployeeCard from '../molecules/EmployeeCard';
import { cn } from '@/lib/utils';
import Button from '../atoms/Button';
import Icons from '../atoms/Icons';
import { usePrevNextButtons } from '@/hooks/useEmblaNavigation';

interface Props {
  employees: Employee[];
}

const TWEEN_FACTOR_BASE = 0.12;

const numberWithinRange = (number: number, min: number, max: number): number => Math.min(Math.max(number, min), max);

export default function EmployeeCarousel({ employees }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [parentRef] = useAutoAnimate({
    duration: 500,
  });

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const [showEmployee, setShowEmployee] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla-slide-item') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenTransform = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      // let isGoToCenter = 0;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  // Update the active slide index
  const updateActiveSlide = useCallback(() => {
    if (emblaApi) {
      setActiveSlideIndex(emblaApi.selectedScrollSnap());
      // setActiveSlide(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenTransform(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenTransform)
      .on('scroll', tweenTransform)
      .on('slideFocus', tweenTransform)
      .on('select', updateActiveSlide);
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenTransform, updateActiveSlide]);

  useEffect(() => {
    setTimeout(() => setShowEmployee(true), 50);
  }, []);

  return (
    <div ref={parentRef} className="embla relative mx-auto max-w-[22rem] md:max-w-[40rem] xl:max-w-[30rem]">
      {showEmployee && (
        <>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="embla-container">
              {employees.map((employee, index) => {
                const isActive = activeSlideIndex === index;

                return (
                  <div className={cn('embla-slide relative', isActive ? 'z-10' : 'z-0')} key={index}>
                    <div id={`${employee.id}`} className="embla-slide-item relative flex justify-center">
                      <EmployeeCard key={employee.id} employee={employee} showSallary={isActive} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute right-full top-0 mt-8 h-full">
            <Button
              disabled={prevBtnDisabled}
              variant="ghost"
              className="h-full rounded-none px-2 py-2 hover:bg-transparent [&_svg]:size-6 xl:[&_svg]:size-8"
              onClick={onPrevButtonClick}>
              <Icons.chevronLeft />
            </Button>
          </div>
          <div className="absolute left-full top-0 mt-8 h-full">
            <Button
              disabled={nextBtnDisabled}
              variant="ghost"
              className="h-full rounded-none px-2 py-2 hover:bg-transparent [&_svg]:size-6 xl:[&_svg]:size-8"
              onClick={onNextButtonClick}>
              <Icons.chevronRight />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
