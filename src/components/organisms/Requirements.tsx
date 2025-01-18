import Link from 'next/link';
import Requirement from '../molecules/Requirement';

const requirements = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'];

export default function Requirements() {
  return (
    <div className="mt-6 space-y-4 px-4 xl:hidden">
      <div className="grid w-72 grid-cols-2 gap-2">
        {requirements.map((requirement) => (
          <Requirement key={requirement}>{requirement}</Requirement>
        ))}
      </div>
      <div>
        <Link href="#" className="text-accent underline">
          개발자가 필요하신가요?
        </Link>
      </div>
    </div>
  );
}
