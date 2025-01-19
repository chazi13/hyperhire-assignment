import HeroInfo from '@/components/molecules/HeroInfo';
import Highlights from '@/components/organisms/Highlights';

export default function Home() {
  return (
    <div className="mt-15">
      <HeroInfo />
      <Highlights />
    </div>
  );
}
