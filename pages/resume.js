import Hero from "../components/Hero";
import heroBackgroundImageResume from '../public/images/moves.jpg';
import MyResume from "../components/MyResume";

export default function Resume() {
  return (
    <div className='relative mb-12'>
      <Hero
        image={heroBackgroundImageResume}
        heading='Resume'
        action='View Resume'
        link='#myResume'
      />
      <MyResume />
  </div>
  );
}