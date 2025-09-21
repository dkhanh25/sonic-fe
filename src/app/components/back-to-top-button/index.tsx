import { ArrowIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={cn(
        'bg-shade-03 fixed bottom-4 right-4 aspect-square rounded-full p-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#335e91]',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      onClick={scrollToTop}
    >
      <ArrowIcon className='text-light-shade-01 h-4' />
    </button>
  );
};
