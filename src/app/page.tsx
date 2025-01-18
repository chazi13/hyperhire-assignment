import HeroInfo from '@/components/molecules/HeroInfo';
import Highlights from '@/components/organisms/Highlights';

export default function Home() {
  return (
    <div className="mx-auto mt-15 max-w-screen-xl">
      <HeroInfo />
      <Highlights />
    </div>
  );
}
