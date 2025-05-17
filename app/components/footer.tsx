import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative">
      <Image
        src="/waves.svg"
        alt="Waves"
        width={1000}
        height={1000}
        className="w-full h-full"
      />
      <div className="relative w-full h-full bg-[#f65140] pb-6">
        <div className="container mx-auto px-4 z-10 relative bg-[#f65140] w-full h-full">
          <div className="text-center">
            <p className="text-white">
              &copy; {new Date().getFullYear()} Ribethena. All rights reserved.
            </p>
            <p className="text-white/80 text-sm mt-1">
              Created for Playwright E2E testing demonstrations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
