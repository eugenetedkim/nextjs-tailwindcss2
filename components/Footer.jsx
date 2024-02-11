import Link from 'next/link';

export default function Footer() {
  return (


    <footer className='w-full'>
      <div className='flex justify-center'>
          <p>
            © 2024 <Link href='/' className="hover:underline"> eugenetedkim.com</Link>
          </p>
      </div>
    </footer>

  );
}