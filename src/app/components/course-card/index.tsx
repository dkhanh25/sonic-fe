import { Card } from '@/components/ui/card';
import type { CourseLevelType } from '@/types';
import { CourseTag } from '../course-tag';

type CourseCardProps = {
  title: string;
  description: string;
  image: string;
  level: CourseLevelType;
  duration: string;
  lectures: string;
};

export const CourseCard = ({
  description,
  duration,
  image,
  lectures,
  level,
  title,
}: CourseCardProps) => {
  return (
    <Card className='bg-light-black gap-0 border-white/30 py-0'>
      <img src={image} className='rounded-xl' />
      <div className='flex h-full flex-col p-2 xl:px-5 xl:py-4'>
        <p className='text-md mb-1 truncate font-semibold text-white xl:text-lg'>
          {title}
        </p>
        <p className='xl:text-md mb-2 truncate text-xs font-medium text-white md:text-sm'>
          {description}
        </p>
        <div className='mb-5 flex flex-row flex-wrap gap-2'>
          <CourseTag levelTag={level} />
          <CourseTag>{duration}</CourseTag>
          <CourseTag>{lectures}</CourseTag>
        </div>

        <button className='bg-light-shade-01 text-shade-01 md:text-md ms-auto mt-auto flex w-full justify-center rounded-lg px-4 py-1.5 text-sm font-bold xl:w-fit xl:px-2 xl:text-lg'>
          Start learning
        </button>
      </div>
    </Card>
  );
};
