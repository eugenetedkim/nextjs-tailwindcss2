import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../utils/posts';
import Date from '../../components/Date';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';
import remarkTOC from 'remark-toc';
import { ScrollToTop } from '../../components/ScrollToTop';
import Hero from "../../components/Hero";
import heroBackgroundImageBlog from '../../public/images/graffiti.jpeg';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await getPostData(params.id);
  const mdxSource = await serialize(
    source.content,
    {
      mdxOptions: {
        rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeSlug],
        remarkPlugins: [remarkTOC],
      },
      parseFrontmatter: true
    }
  );
  return {
    props: {
      mdxSource
    }
  }
}

const customHeadingThree = function({ id, ...props }) {
  if (id) {
    return (
      <>
        <Link href={`#${id}`}>
          <h3 id={ id } { ...props } />
        </Link>
      </>
    );
  }
  return <h1 { ...props } />;
}

const components = {
  h3: customHeadingThree
};



export default function Post({ mdxSource }) {
  return (
    <>
      <Head>
        <title>{mdxSource.frontmatter.title}</title>
      </Head>

      <Hero
        image={heroBackgroundImageBlog}
        heading={mdxSource.frontmatter.title}
        message={<Date dateString={mdxSource.frontmatter.date}/>}
        action='Read'
        link={`#${mdxSource.frontmatter.title.replace(/\s/g, '')}`}
      />

      <div id={mdxSource.frontmatter.title.replace(/\s/g, '')}
        className='flex justify-center p-12 scroll-my-40 mt-24 mb-12'
      >
        <div className='prose flex flex-col justify-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-6'>
          <MDXProvider components={components}>
            <MDXRemote {...mdxSource } components={{...components}} />
          </MDXProvider>
        </div>
        <ScrollToTop />
      </div>

    </>
  );
}