import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto className='text-sm text-gray-500 p-4 text-center">
          © 2024 <Link href='/' className="hover:underline">eugenetedkim.com</Link>
      </div>
  </footer>
  );
}