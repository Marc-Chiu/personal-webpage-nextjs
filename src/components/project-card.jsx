import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ src, description, url }) => {
  return (
    <>
      <Link href={url} className="flex flex-col items-center my-5 ">
        <Image
          src={src}
          alt={description}
          width={400}
          height={200}
          className="rounded-lg shadow-lg object-cover border-1 w-[500px] border-black "
        />
        <p>{description}</p>
      </Link>
    </>

    // <div className="project-card bg-white h-[300px] w-[300px] rounded-lg shadow-lg p-4"></div>
  );
};

export default ProjectCard;
