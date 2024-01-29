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
        message='Written notes and thoughts'
        action='Look at posts'
        link='#posts'
      />
      <div id='posts' className='scroll-my-40 mt-24 mb-12'>
       <h1 className='text-4xl font-bold text-center mb-12'>Posts</h1>
        {/* Outer flex container */}
        <div className='flex flex-wrap h-screen justify-evenly'>
          {
            allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`} className='flex flex-col justify-center text-center p-12 bg-black hover:bg-black/80 text-white w-1/4 h-64 min-w-96 m-10'>
                {title}
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