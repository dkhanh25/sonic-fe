import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SonicLabs - Courses',
  description: 'Courses of Sonic Labs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* <link
          rel='icon'
          type='image/svg+xml'
          href='/logos/logomark-white.svg'
        /> */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='bg-black'>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
