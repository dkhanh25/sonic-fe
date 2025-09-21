import { Card } from '@/components/ui/card';
import { CourseTag } from '../course-tag';

export const CourseCard = () => {
  return (
    <Card className='bg-light-black gap-0 border-white/30 py-0'>
      <img src='/images/sonic-banner.svg' className='rounded-xl' />
      <div className='p-2 xl:px-5 xl:py-4'>
        <p className='text-md mb-1 font-semibold text-white xl:text-lg'>
          Intro to Sonic Smart Contracts
        </p>
        <p className='xl:text-md mb-2 text-xs font-medium text-white md:text-sm'>
          Dive into the intricate details of Sonic.
        </p>
        <div className='mb-5 flex flex-row flex-wrap gap-2'>
          <CourseTag levelTag='ADVANCED' />
          <CourseTag>67 Hours</CourseTag>
          <CourseTag>34 Lectures</CourseTag>
        </div>

        <button className='bg-light-shade-01 text-shade-01 md:text-md ms-auto flex w-full justify-center rounded-lg px-4 py-1.5 text-sm font-bold xl:w-fit xl:px-2 xl:text-lg'>
          Start learning
        </button>
      </div>
    </Card>
  );
};
