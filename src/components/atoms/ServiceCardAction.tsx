import Link from 'next/link';
import Icons from './Icons';

export default function ServiceCardAction() {
  return (
    <Link href="#" className="mt-4 flex items-center gap-1.5 text-muted">
      바로가기 <Icons.arrowRightSquare />
    </Link>
  );
}
