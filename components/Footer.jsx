import Link from 'next/link';

export default function Footer() {
  return (
    // <>
    //   {/* The Navigation Bar Outer Container */}
    //   <div className={`relative left-0 bottom-0 w-full z-10 border-t-2`}>

    //     {/*The Navigation Bar Inner Container */}
    //     <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>

    //     </div>

    //   </div>
    // </>
    <footer className="bg-white shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href='/' className="hover:underline">eugenetedkim.com</Link>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li className='hover:underline me-4 md:me-6'>
        <Link href='/'>Home</Link>
      </li>
      <li className='hover:underline me-4 md:me-6'>
        <Link href='/blog'>Blog</Link>
      </li>
      <li className='hover:underline me-4 md:me-6'>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
    </div>
</footer>
  );
}