import Hero from "../components/Hero";
import heroBackgroundImageBlog from '../public/images/graffiti.jpeg';
import { getSortedPostsData } from '../utils/posts';
import Link from 'next/link';
import Date from '../components/Date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Hero
        image={heroBackgroundImageBlog}
        heading='Blog'
        action='View Posts'
        link='#posts'
      />
      <div id='posts' className='scroll-my-40 sm:scroll-my-16 mt-24 mb-48'>
       <h1 className='text-4xl font-bold text-center mb-24'>Posts</h1>
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
    </>
  );
}