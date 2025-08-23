import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="TokenPulse Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">
                <span className="text-[#0D1752]">TOKEN</span> <span className="text-[#24A354]">PULSE</span>
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative text-gray-600 hover:text-[#0D1752] transition-all duration-300 font-medium group">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0D1752] to-[#24A354] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/offering" className="relative text-gray-600 hover:text-[#0D1752] transition-all duration-300 font-medium group">
              <span className="relative z-10">Our Offering</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0D1752] to-[#24A354] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/how-it-works" className="relative text-gray-600 hover:text-[#0D1752] transition-all duration-300 font-medium group">
              <span className="relative z-10">How it Works</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0D1752] to-[#24A354] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="relative text-gray-600 hover:text-[#0D1752] transition-all duration-300 font-medium group">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0D1752] to-[#24A354] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button size="sm" className="bg-gradient-to-r from-[#0D1752] to-purple-700 hover:from-[#0D1752]/90 hover:to-purple-700/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
