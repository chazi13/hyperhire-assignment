'use client';

import EmployeeCard from '../molecules/EmployeeCard';
import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Employee } from '@/types';

interface Props {
  employees: Employee[];
}

export default function EmployeeCarousel({ employees }: Props) {
  const [parentRef] = useAutoAnimate({
    duration: 500,
  });

  const [showHighlights, setShowHighlights] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHighlights(true), 50);
  }, []);

  return (
    <div ref={parentRef} className="relative flex w-full justify-center">
      {showHighlights &&
        employees.map((employee, index) => index === 0 && <EmployeeCard key={employee.id} employee={employee} />)}
    </div>
  );
}
