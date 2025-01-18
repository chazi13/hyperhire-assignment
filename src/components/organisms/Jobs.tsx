'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState, useEffect } from 'react';
import CardIcon from '../atoms/CardIcon';
import Icons from '../atoms/Icons';
import JobCard from '../molecules/JobCard';
import { Job } from '@/types';

export default function Jobs() {
  const [parentRef] = useAutoAnimate({
    duration: 500,
  });

  const [showJobs, setShowJobs] = useState(false);
  const [removedJob, setRemovedJob] = useState<Job>();
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      icon: <Icons.marketing />,
      name: '해외 마케팅',
    },
    {
      id: 2,
      icon: <Icons.image />,
      name: '퍼블리셔',
    },
    {
      id: 3,
      icon: <Icons.box />,
      name: '캐드원(제도사)',
    },
    {
      id: 4,
      icon: <Icons.target />,
      name: '해외 세일즈',
    },
    {
      id: 5,
      icon: <Icons.call />,
      name: '해외 CS',
    },
    {
      id: 6,
      icon: <Icons.presentation />,
      name: '해외 마케팅',
    },
  ]);

  useEffect(() => {
    setTimeout(() => setShowJobs(true), 100);
  }, []);

  useEffect(() => {
    let timeout = null;

    if (showJobs) {
      const [firstItem, ...rest] = jobs;

      timeout = setTimeout(() => {
        setRemovedJob(firstItem);
        setJobs([...rest]);
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [jobs, showJobs]);

  useEffect(() => {
    const timeout = null;

    if (removedJob) {
      setTimeout(() => {
        setJobs((jobs) => [...jobs, removedJob]);
      }, 550);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [removedJob]);

  return (
    <div className="mx-auto mt-[60px] hidden max-w-screen-xl xl:block">
      <div ref={parentRef} className="flex gap-[10px]">
        {showJobs &&
          jobs.map((job) => (
            <JobCard key={job.id}>
              <CardIcon>{job.icon}</CardIcon>
              <p>{job.name}</p>
            </JobCard>
          ))}
      </div>
    </div>
  );
}
