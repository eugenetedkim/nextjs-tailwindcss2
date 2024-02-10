import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 w-full'>
      <div className='flex justify-center h-5'>
          <p>
            © 2024 <Link href='/' className="hover:underline"> eugenetedkim.com</Link>
          </p>
      </div>
  </footer>
  );
}