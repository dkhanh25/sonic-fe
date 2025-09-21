import { WhiteTransparentLogo } from '@/assets/logos';

export const Footer = () => (
  <div className='bg-light-black w-full px-5 pb-4 pt-6 md:pt-8 xl:pt-12'>
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <WhiteTransparentLogo className='h-10 md:h-14 xl:h-20' />
      <div className='md:text-md'>
        <p className='text-light-shade mb-2 mt-6 md:mt-0'>Get funding</p>
        <div className='grid grid-cols-1 gap-2 text-white'>
          <a className='hover:cursor-pointer hover:underline'>Airdrop</a>
          <a className='hover:cursor-pointer hover:underline'>Innovator fund</a>
          <a className='hover:cursor-pointer hover:underline'>
            Fee Menetization
          </a>
        </div>
      </div>
    </div>
    <p className='md:text-md mt-4 flex justify-center text-white md:mt-6 md:justify-start'>
      © 20h25 Sonic Labs. All Rights Reserved.
    </p>
  </div>
);
