import { cn } from '@/lib/utils';
import { CourseLevel, type CourseLevelType } from '@/types';
import type { PropsWithChildren } from 'react';

type CourseTagProps = {
  levelTag?: CourseLevelType;
};

export const CourseTag = ({
  levelTag,
  children,
}: PropsWithChildren<CourseTagProps>) => {
  if (!levelTag)
    return (
      <p className='bg-shade-03 xl:text-md w-fit rounded-sm px-4 py-1 text-xs font-medium text-white md:text-sm'>
        {children}
      </p>
    );

  let tagColor = '';
  let tagContent = '';
  switch (levelTag) {
    case CourseLevel.BEGINNER:
      tagColor = 'bg-hero-01';
      tagContent = 'Beginner';
      break;
    case CourseLevel.INTERMEDIATE:
      tagColor = 'bg-hero-02';
      tagContent = 'Intermediate';
      break;
    case CourseLevel.ADVANCED:
      tagColor = 'bg-shade-01';
      tagContent = 'Advanced';
      break;
    default:
      tagColor = 'bg-shade-03';
      tagContent = '5 Stars';
      break;
  }
  return (
    <p
      className={cn(
        'bg-shade-03 xl:text-md w-fit rounded-sm px-4 py-1 text-xs font-medium text-white md:text-sm',
        tagColor,
      )}
    >
      {tagContent}
    </p>
  );
};
