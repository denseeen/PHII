import React from 'react'
import Link from 'next/link';

export default function About() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-black mb-6">
          About Philippine Insider Intelligence Magazines
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <strong>Philippine Insider Intelligence Magazines</strong>, a *fan-based platform* dedicated to showcasing the *power players and influential figures* shaping the Philippine business world.
        </p>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        At Philippine Insider Intelligence Magazine, we are dedicated to delivering insightful and impactful content that resonates with the business community. Our mission is to inform, inspire, and contribute to the long-term success of businesses by showcasing influential narratives that shape the Philippine business landscape.
        </p>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        We started Philippine Insider Intelligence Magazine in 2010 with the goal of providing business news, information on many business topics, and more. Today, our reach has grown to be seen across multiple industries.
        </p>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Team</h2>
        <ul className="text-lg text-gray-700 leading-relaxed ">
          <p>Our team consists of experienced professionals who are dedicated to bring the best, honest, and up-to-date information about the business world. We are passionate about what we do and are always looking for new and innovative ways to reach our goals.</p>
         
        </ul>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the Community</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you’re a *business student, aspiring CEO, or simply fascinated by the stories of Filipino business moguls*, this platform is for you!  
          📩 *Want to contribute?* Reach out—we’d love to hear from fellow fans and business enthusiasts!
        </p>
  
        {/* <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-[#29C75E] text-white font-semibold rounded-md shadow-md hover:bg-[#25A14A] transition"
          >
            Back to Home
          </Link>
        </div> */}
      </div>
    );
  }