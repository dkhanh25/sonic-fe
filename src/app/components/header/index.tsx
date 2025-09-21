import { MenuIcon } from '@/assets/icons';
import { WhiteTransparentLogo } from '@/assets/logos';

const Header = () => (
  <div className='bg-light-black fixed flex w-screen justify-between px-4 py-3 md:px-8 xl:px-20 xl:py-4'>
    <WhiteTransparentLogo className='h-8 hover:cursor-pointer md:h-14' />
    <MenuIcon className='w-5 text-white hover:cursor-pointer hover:text-gray-400 md:w-8 xl:w-12' />
  </div>
);

export default Header;
