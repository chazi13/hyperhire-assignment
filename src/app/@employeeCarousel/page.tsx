import EmployeeCarousel from '@/components/organisms/EmployeeCarousel';
import { Employee } from '@/types';
import { GET } from '../employees/route';

async function getEmployees() {
  const res = await GET();

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return (await res.json()) as Employee[];
}

export default async function EmployeeCarouselPage() {
  const employees = await getEmployees();

  return (
    <div>
      <EmployeeCarousel employees={employees} />
    </div>
  );
}
