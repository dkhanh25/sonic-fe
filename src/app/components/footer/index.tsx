import { WhiteTransparentLogo } from '@/assets/logos';

export const Footer = () => (
  <div className='bg-light-black w-full px-5 pb-4 pt-6'>
    <WhiteTransparentLogo className='h-10' />
    <p className='text-light-shade mb-2 mt-6'>Get funding</p>
    <div className='grid grid-cols-1 gap-2 text-white'>
      <a>Airdrop</a>
      <a>Innovator fund</a>
      <a>Fee Menetization</a>
    </div>
    <p className='mt-4 flex justify-center text-white'>
      © 20h25 Sonic Labs. All Rights Reserved.
    </p>
  </div>
);
