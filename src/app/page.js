'use client';

import WordCloud from '@/components/wordcloud';
import About from '@/components/about';
import Footer from '@/components/footer';
import { useScroll } from 'framer-motion';
import './globals.css';
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/carousel-project'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-linear-to-b from-black to-white text-white p-30">
        <div className="lg:h-[800px] h-screen top-0 left-0">
          <WordCloud />
        </div>
      </div>
      <div>
        {/* <div className="sticky top-0 flex flex-col items-end justify-end mx-[15%] gap-3 pt-[100px]">
          <h1>About</h1>
          <h1>Projects</h1>
        </div>{' '} */}
        <div className=" flex items-center flex-col text-black pb-10">
          <About />
        </div>
        <div className="">
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}
