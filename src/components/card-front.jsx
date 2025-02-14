import React from 'react';
import HoverIcon from './hover-icon';
import Image from 'next/image';
import Link from 'next/link';

const linkedin = (
  <Link
    className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
    href="https://www.linkedin.com/in/marc-chiu"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      className="block size-[30px] "
      src="/linkedin-logo.png"
      alt="Radix UI"
    />
  </Link>
);

const linkedinContent = (
  <div className="flex flex-col gap-[7px]">
    <img
      className="block size-[60px] rounded-full"
      src="/linkedin-logo.png"
      alt="Linkedin Logo"
    />
    <div className="flex flex-col gap-[15px]">
      <div>
        <div className="m-0 text-[15px] font-medium">Linkedin</div>
        <div className="m-0 text-[15px] ">@marc-chiu</div>
      </div>
      <div className="m-0 text-[15px] ">
        Connect with me on LinkedIn! I'd love to hear from you and discuss job
        opportunities.
      </div>
      <div className="flex gap-[15px]">
        <div className="flex gap-[5px]">
          <div className="m-0 text-[15px] font-medium ">200+</div>{' '}
          <div className="m-0 text-[15px] ">connections</div>
        </div>
      </div>
    </div>
  </div>
);

const github = (
  <a
    className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
    href="https://github.com/Marc-Chiu"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img className="block size-[30px] " src="/github-logo.png" alt="Github" />
  </a>
);

const githubContent = (
  <div className="flex flex-col gap-[7px]">
    <img
      className="block size-[60px] rounded-full"
      src="/github-logo.png"
      alt="Github Logo"
    />
    <div className="flex flex-col gap-[15px]">
      <div>
        <div className="m-0 text-[15px] font-medium">Github</div>
        <div className="m-0 text-[15px] ">@Marc-Chiu</div>
      </div>
      <div className="m-0 text-[15px] ">
        Connect with me onGithub! Let's collaborate on some projects. I'd love
        to talk more :)
      </div>
      <div className="flex gap-[15px]">
        <div className="flex gap-[5px]">
          <div className="m-0 text-[15px] font-medium ">2</div>{' '}
          <div className="m-0 text-[15px] ">Following</div>
        </div>
        <div className="flex gap-[5px]">
          <div className="m-0 text-[15px] font-medium ">0</div>{' '}
          <div className="m-0 text-[15px] ">Followers</div>
        </div>
      </div>
    </div>
  </div>
);

const meImage = (
  <Image
    src="/me.png"
    width={100}
    height={100}
    alt="Picture of the author"
    className="border-2 border-black rounded-full size-[45px] mb-5"
  />
);

const myInfo = (
  <div className="flex flex-col gap-[7px]">
    <Image
      src="/me.png"
      width={150}
      height={150}
      alt="Picture of the author"
      className="border-2 border-black rounded-full size-[45px] mb-5"
    />
    <div className="flex flex-col gap-[15px]">
      <div>
        <div className="m-0 text-[15px] font-medium">Linkedin</div>
        <div className="m-0 text-[15px] ">@marc-chiu</div>
      </div>
      <div className="m-0 text-[15px] ">
        Let's connect! I'm currently looking for a full-time software
        engineering position. Here's my email: mchiu1402@gmail.com
      </div>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="gap-[10px] flex">
        <HoverIcon image={linkedin} content={linkedinContent} />
        <HoverIcon image={github} content={githubContent} />
      </div>
      <HoverIcon image={meImage} content={myInfo} />
    </div>
  );
};

const CardFront = ({ children }) => {
  return (
    <>
      <div className="p-4">
        <Navbar />
        {children}
      </div>
      <div className="h-[20%] w-[100%] bg-amber-300 absolute bottom-0"></div>
    </>
  );
};
export default CardFront;
