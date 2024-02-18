import Link from 'next/link';
import Date from '../components/Date';

export default function BlogPosts({ allPostsData }) {
  return (
    <section id='posts' className='relative flex flex-col h-screen gap-12 px-4'>

      {/* Heading */}
      <div className='flex justify-center items-center mt-24 lg:mb-0'>
        <h1 className='text-center text-4xl font-bold'>Posts</h1>
      </div>

      {/* Outer flex container */}
      <div className='flex flex-wrap h-fit justify-evenly'>
        {
          allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} className='flex flex-col justify-center text-center p-12 border shadow m-4 w-1/4 h-64 min-w-80 sm:min-w-96 mb-12 transition duration-300 ease-in-out hover:scale-105'>
              <div className='font-bold'>
                {title}
              </div>
              <small>
                <Date dateString={date} />
              </small>
            </Link>
          ))
        }
      </div>
    </section>
  )
}