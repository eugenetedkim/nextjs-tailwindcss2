import Hero from "../components/Hero";
import heroBackgroundImageContact from '../public/images/message.jpeg';

export default function Blog() {
  return (
    <>
      <Hero
        image={heroBackgroundImageContact}
        heading='Contact'
        action='Email me'
        link='#emailMe'
      />
      <div id='emailMe' className='relative flex flex-col h-screen items-center justify-center'>
        <h1 className='text-4xl font-bold text-center mb-12'>Email Me</h1>

        <div className='w-3/4'>
          <label className='block'>First Name</label>
          <input className='border w-full mb-4'></input>
        </div>

        <div className='w-3/4'>
          <label className='block'>Last Name</label>
          <input className='border w-full mb-4'></input>
        </div>

        <div className='w-3/4'>
          <label className='block'>Email</label>
          <input className='border w-full mb-4'></input>
        </div>

        <div className='w-3/4'>
          <label className='block'>Message</label>
          <textarea rows='8' className='border w-full'></textarea>
        </div>

        <button className='px-6 py-1 border mt-4'>
          Send
        </button>
      </div>
    </>
  );
}