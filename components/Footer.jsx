import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div>
          © 2024 <Link href='/' className="hover:underline">eugenetedkim.com</Link>
      </div>
  </footer>
  );
}