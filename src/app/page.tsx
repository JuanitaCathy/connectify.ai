import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/moving-border";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Section container */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-14">
          <div className="text-center">

            {/* Main Heading with Gradient */}
            <h1 className="mt-4 text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight overflow-visible sm:text-6xl">
              Connect with <span className='bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-purple-500'>AI-Powered Collaboration</span>
              <br /> 
              <span className="inline-block text-l leading-tight sm:mt-2">Find your Code Buddies!</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experience seamless interaction like never before with Connectify.ai. Our AI-driven platform empowers devs to work connect, collaborate and innovate something cool.
            </p>

            {/* Call to Action Button */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/rooms" passHref>
                <Button className="relative z-20 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-gradient-to-l hover:from-purple-900 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-300 ease-in-out">
                  Start Collaborating
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
