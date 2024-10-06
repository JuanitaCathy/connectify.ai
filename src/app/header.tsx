'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 z-10 relative bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold ml-4">
          Connectify.
        </Link>

        {/* Navigation in the center */}
        <nav className="flex-grow flex justify-center items-center gap-5 font-semibold text-xl text-gray-200">
          <Link className="hover:text-pink-400 transition-colors duration-300" href="/browse">
            Browse Rooms
          </Link>
          <span className="text-gray-600">•</span>
          <Link className="hover:text-pink-400 transition-colors duration-300" href="/your-rooms">
            Your Rooms
          </Link>
          <span className="text-gray-600">•</span>
          <Link className="hover:text-pink-400 transition-colors duration-300" href="/code-room">
            Code Inventory
          </Link>
          <span className="text-gray-600">•</span>
          <Link
            className="hover:text-pink-400 transition-colors duration-300"
            href="https://github.com/JuanitaCathy/connectify.ai/blob/main/README.md"
          >
            Docs
          </Link>
          <span className="text-gray-600">•</span>
          <Link className="hover:text-pink-400 transition-colors duration-300" href="https://github.com/JuanitaCathy/connectify.ai">
            Github
          </Link>
        </nav>
      </div>
    </header>
  );
}
