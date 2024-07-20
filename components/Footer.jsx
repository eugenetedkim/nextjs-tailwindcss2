import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const showOrHideFooter = () => {
      if (window.scrollY >= (document.documentElement.scrollHeight - window.innerHeight)) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };
    window.addEventListener('scroll', showOrHideFooter);
  });

  return (
    <footer className={isFooterVisible ? 'w-full h-32' : 'hidden'}>
      <div className='flex justify-center h-full items-end'>
          <p>
            © 2024 <Link href='/' className="hover:underline"> eugenetedkim.com</Link>
          </p>
      </div>
    </footer>

  );
}