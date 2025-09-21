type MenuIconProps = {
  className?: string;
};

export const MenuIcon = ({ className }: MenuIconProps) => (
  <svg
    viewBox='0 0 20 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M19 5H1'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 1H1'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 9H1'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 13H1'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
