import Hero from "../components/Hero";
import heroBackgroundImageContact from '../public/images/message.jpeg';
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className='md:h-screen'>
      <Hero
        image={heroBackgroundImageContact}
        heading='Contact'
        action='Email me'
        link='#emailMe'
      />
      <ContactForm />
  </div>
  );
}