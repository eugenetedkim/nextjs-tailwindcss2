import meImage from '../public/images/me.png';
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id='aboutMe' className='flex flex-col relative h-screen'>

        <h1 className='flex justify-center items-center mt-36 mb-24 text-4xl font-bold'>About Me</h1>

        <div className='h-auto flex justify-center items-center flex-wrap-reverse gap-10'>

          <div class='relative h-64 w-96'>
            <p className='text-lg inline'>My name is <span className='font-semibold'>Eugene Kim</span></p>
            <p className='text-lg'>and I'm a <span className='font-medium'>software engineer</span> at <a className='font-medium text-blue-600 hover:text-blue-600 visited:text-blue-800' href='https://fulgentgenetics.com/' target='_blank'>Fulgent Genetics</a>.</p><br/>
            <p className='text-lg'>I solve problems across the stack by building solutions for accurate and efficient data processing, exchange, and presentation.</p>
          </div>

          <div className='mt-auto'>
            <Image
              src={meImage}
              alt='me'
              height={300}
              width={300}
              className='object-cover'
              priority
              unoptimized={true}
            />
          </div>
        </div>

        <div className='flex-1'/>
        
    </section>
  )
}