import Hero from "../components/Hero";
import heroBackgroundImageResume from '../public/images/moves.jpg';
import MyResume from "../components/MyResume";

export default function Resume() {
  return (
    <div className='h-full'>
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