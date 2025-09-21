import { cn } from '@/lib/utils';

type ArrowIconProps = {
  className?: string;
  direction?: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
};

export const ArrowIcon = ({ direction, className }: ArrowIconProps) => {
  let directionClassName;
  switch (direction) {
    case 'DOWN':
      directionClassName = 'rotate-180';
      break;
    case 'LEFT':
      directionClassName = '-rotate-90';
      break;
    case 'RIGHT':
      directionClassName = 'rotate-90';
      break;
    case 'UP':
    default:
      break;
  }
  return (
    <svg
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className, directionClassName)}
    >
      <path
        d='M8 15V1'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 8L8 1L15 8'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
