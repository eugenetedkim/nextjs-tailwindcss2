import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  // The variables for storing the colors of the navigation bar
  const [backgroundColor, setBackgroundColor] = useState('bg-transparent');
  const [textColor, setTextColor] = useState('text-white');

  // The variable for storing the boolean used for presenting the mobile menu
  const [isMobileMenuDislayed, setIsMobileMenuDisplayed] = useState(false);

  // The function that will respond to clicks of the mobile menu buttons and presenting the mobile menu
  const handleMobileMenu = () => {
    setIsMobileMenuDisplayed(!isMobileMenuDislayed);
  }

  // The function that will respond to scrolling on the browser window and presenting the colors of the navigation bar
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBackgroundColor('bg-white');
        setTextColor('text-black');
      } else {
        setBackgroundColor('bg-transparent');
        setTextColor('text-white');
      }
    };
    window.addEventListener('scroll', changeColor);
  });

  return (
    <>
      {/* The Navigation Bar Outer Container */}
      <div className={`${backgroundColor} fixed left-0 top-0 w-full z-10 ease-in duration-300`}>

        {/*The Navigation Bar Inner Container */}
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>

          {/*The Navigation Bar Logo */}
          <Link href='/'>
            <h1 className={`${textColor} font-bold text-4xl font-logo`}>E</h1>
          </Link>
          
          {/*The Navigation Bar Links */}
          <ul className={`${textColor} hidden sm:flex`}>
            <li className='p-4'>
              <Link href='/'>About Me</Link>
            </li>
            <li className='p-4'>
              <Link href='/blog'>Blog</Link>
            </li>
            <li className='p-4'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='p-4'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>

          {/*The Mobile Menu Buttons */}
          <div onClick={handleMobileMenu} className='sm:hidden z-10'>
          {
            isMobileMenuDislayed ?
              <AiOutlineClose className='text-white' size={20} />
            :
              <AiOutlineMenu className={`${textColor}`} size={20} />
          }
          </div>

          {/*The Mobile Menu */}
          <div className={
            isMobileMenuDislayed ?
              'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
            :
              'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
          }>
            <ul>
              <li onClick={handleMobileMenu} className='p-4 text-4xl hover:text-white'>
                <Link href='/'>About Me</Link>
              </li>
              <li onClick={handleMobileMenu} className='p-4 text-4xl hover:text-white'>
                <Link href='/blog'>Blog</Link>
              </li>
              <li onClick={handleMobileMenu} className='p-4 text-4xl hover:text-white'>
                <Link href='/resume'>Resume</Link>
              </li>
              <li onClick={handleMobileMenu} className='p-4 text-4xl hover:text-white'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </>
  );
}