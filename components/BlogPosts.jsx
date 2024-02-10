import Link from 'next/link';
import Date from '../components/Date';

export default function BlogPosts({ allPostsData }) {
  return (
    <div id='posts' className='flex flex-col h-screen landscape:h-full landscape:mt-24 portrait:h-full items-center justify-center p-6'>
      <h1 className='text-4xl font-bold text-center mb-12'>Posts</h1>

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
    </div>
  )
}