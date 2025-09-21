import { MenuIcon } from '@/assets/icons';
import { WhiteTransparentLogo } from '@/assets/logos';

export const Header = () => (
  <div className='bg-light-black sticky top-0 flex w-full justify-between px-4 py-3 md:px-8 xl:px-20 xl:py-4'>
    <WhiteTransparentLogo className='h-8 hover:cursor-pointer md:h-14' />
    <MenuIcon className='w-5 text-white hover:cursor-pointer hover:text-gray-400 md:w-8 xl:w-12' />
  </div>
);
