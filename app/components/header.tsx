import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full">
      <div className="px-4 pt-2 z-10 relative bg-[#f65140]">
        <div className="flex items-center justify-between mx-auto container">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Ribethena"
              height={40}
              width={40}
              unoptimized
              className="h-[100px] w-[100px] pt-2"
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-700 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-700 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Image
        src="/waves.svg"
        alt="Waves"
        width={1000}
        height={1000}
        className="w-full h-full rotate-180 mt-[-40px]"
      />
    </header>
  );
}
