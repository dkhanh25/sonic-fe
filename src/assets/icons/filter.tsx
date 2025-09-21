type FilterIconProps = {
  className?: string;
};

export const FilterIcon = ({ className }: FilterIconProps) => (
  <svg
    width='16'
    height='14'
    viewBox='0 0 16 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M14.3333 1H1L6.33333 7.30667V11.6667L9 13V7.30667L14.3333 1Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
