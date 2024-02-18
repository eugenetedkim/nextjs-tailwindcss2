import Head from 'next/head'
import Hero from '../components/Hero';
import heroBackgroundImageHome from '../public/images/convictlake.jpg';
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className='relative mb-12'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        image={heroBackgroundImageHome}
        heading='Eugene Kim'
        message='Software Engineer'
        action='About me'
        link='#aboutMe'
        position='object-left'
      />
      <AboutMe/>
    </div>
  )
}
