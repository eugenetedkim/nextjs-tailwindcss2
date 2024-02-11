import Hero from "../components/Hero";
import heroBackgroundImageBlog from '../public/images/graffiti.jpeg';
import BlogPosts from "@/components/BlogPosts";
import { getSortedPostsData } from '../utils/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Blog(props) {
  return (
    <div className='h-full'>
      <Hero
        image={heroBackgroundImageBlog}
        heading='Blog'
        action='View Posts'
        link='#posts'
      />
      <BlogPosts allPostsData={props.allPostsData} />
    </div>
  );
}