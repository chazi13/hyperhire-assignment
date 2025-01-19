'use client';

import { cn } from '@/lib/utils';
import { Employee } from '@/types';
import { HTMLAttributes, forwardRef } from 'react';
import Avatar from '../atoms/Avatar';
import Badge from '../atoms/Badge';
import EmployeeProfile from '../atoms/EmployeeProfile';
import Image from 'next/image';
import ChatBubble from '../atoms/ChatBubble';
import ChatBubbleCaret from '../atoms/ChatBubbleCaret';
import Icons from '../atoms/Icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  employee: Employee;
  showSallary?: boolean;
}

export default forwardRef<HTMLDivElement, Props>(({ className, employee, showSallary, ...props }, ref) => {
  return (
    <div ref={ref} className="relative pt-16">
      <div
        ref={ref}
        className={cn(
          'relative flex w-[240px] flex-col gap-4 rounded-xl bg-white px-4 py-9 shadow-employee-card xl:w-[300px] xl:gap-9 xl:p-9',
          className,
        )}
        {...props}>
        <div
          className={cn(
            'absolute -top-16 left-0 flex w-full translate-y-5 justify-center opacity-0 transition-all',
            showSallary && 'translate-y-0 opacity-100',
          )}>
          <ChatBubble variant="success">
            <div className="flex gap-2.5">
              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-seafoam">
                <Icons.dollarSign />
              </div>
              <p className="text-lg text-success">{employee.sallary}</p>
            </div>
            <ChatBubbleCaret variant="success" position="center" />
          </ChatBubble>
        </div>
        <div className="align-center flex flex-col gap-4">
          <div className="flex justify-center">
            <div className="relative">
              <Avatar src={employee.imageSrc} alt={`${employee.name} photo`} />
              <div className="absolute -right-1 bottom-0 xl:bottom-1 xl:right-1">
                <Image src={employee.flagImageSrc} alt={`${employee.name} Nationality`} width={25} height={18} />
              </div>
            </div>
          </div>
          <EmployeeProfile name={employee.name} position={employee.position} experience={employee.experience} />
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          {employee.skills.map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
});
