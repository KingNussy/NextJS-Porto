import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" shadow-md">
      <ul className="flex justify-center p-4 space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-600 font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 font-bold">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-600 font-bold">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-blue-600 font-bold">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/certificate" className="hover:text-blue-600 font-bold">
            Certificate
          </Link>
        </li>
      </ul>
    </nav>
  );
}