import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='flex justify-center h-5 p-2 m-auto'>
          <p>
            © 2024 <Link href='/' className="hover:underline"> eugenetedkim.com</Link>
          </p>
      </div>
  </footer>
  );
}