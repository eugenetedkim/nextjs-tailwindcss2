import Image from 'next/image';
import Link from "next/link";

export default function Hero({ image, heading, message, action, link }) {
  return (
    <>
      {/* Hero Container */}
      <div className='relative flex justify-center h-screen items-center'>

        {/* Hero Background Image */}
        <Image
          src={image}
          fill='true'
          className='object-cover object-left'
          alt='Eugene fishing'
        />

        {/* Hero Background Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70' />

        {/* Hero Content */}
        <div className='z-0 text-white px-5 text-center max-w-3xl'>
          <h2 className='text-6xl uppercase p-4'>{ heading }</h2>
          <p className='text-2xl'>{ message }</p>
          <button className={action ? 'px-6 py-1 border mt-4' : 'hidden'}>
            <Link href={link}>
              { action }
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};