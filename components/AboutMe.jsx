import meImage from '../public/images/me.png';
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id='aboutMe' className='relative flex flex-col h-auto justify-between items-center px-4'>
          {/* Heading */}
          <div className='flex justify-center items-center mt-24 mb-16 lg:mb-0'>
            <h1 className='text-center text-4xl font-bold'>About Me</h1>
          </div>
          {/* Grid Container */}
          <div className='flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-5 lg:justify-center lg:items-center mx-12 lg:m-24 w-full sm:w-2/3 gap-2'>
            {/* Grid Item 1 */}
            <div className='order-2 lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:row-span-1 lg:lg:text-center p-2'>
              <p className='text-lg'>My name is <span className='font-semibold'>Eugene Kim </span> and I'm a <span className='font-medium'>software engineer</span> at <a className='font-medium text-blue-600 hover:text-blue-600 visited:text-blue-800' href='https://fulgentgenetics.com/' target='_blank'>Fulgent Genetics</a> .</p>
            </div>
            {/* Grid Item 2 */}
            <div class='order-3 lg:col-start-1 lg:col-span-4 lg:row-start-2 lg:row-span-2 lg:text-center p-2'>
              {/* <p className='text-lg before:content-["\2219\00a0"] before:lg:hidden'>I trace code, debug, and fix problematic parts of the system.</p> */}
              <p className='text-lg'>I solve problems through code to ensure data accuracy and readiness which business operations depends on.</p>
            </div>
            {/* Grid Item 3 */}
            <div className='mb-12 mx-auto lg:mb-0 order-1 lg:col-start-5 lg:col-span-4 lg:row-start-2 lg:row-span-4'>
              <Image
                src={meImage}
                alt='me'
                height={100}
                width={300}
                className='object-cover'
                priority
                unoptimized={true}
              />
            </div>
            {/* Grid Item 4 */}
            <div class='order-4 lg:col-start-9 lg:col-span-4 lg:row-start-2 lg:row-span-2 lg:text-center p-2'>
              <p className='text-lg'>I work with JavaScript to fetch, process, and present the necessary data to internal users who rely on them to satisfy customers.</p>
            </div>
            {/* Grid Item 5 */}
            <div class='order-5 lg:col-start-1 lg:col-span-4 lg:row-start-4 lg:row-span-2 lg:text-center p-2'>
              <p className='text-lg'>I fix, enhance, and extend various systems, making changes across the stack whether it be on the front or backend.</p>
            </div>
            {/* Grid Item 6 */}
            <div class='order-6 lg:col-start-9 lg:col-span-4 lg:row-start-4 lg:row-span-2 lg:text-center p-2'>
              <p className='text-lg'>I build frontend components using Vue.js, API endpoints handled by Express using SQL, automated daemons using Node.js, RabbitMQ, and more.</p>
            </div>
        </div>
    </section>
  )
}