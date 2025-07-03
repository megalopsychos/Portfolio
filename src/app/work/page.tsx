import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGlobe, FaDatabase, FaGraduationCap, FaYoutube } from 'react-icons/fa';

interface Project {
  title: string;
  repoUrl?: string;
  liveUrl?: string;
  description: string;
  details: string[];
  image?: string;
  logo: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "AI Chatbot Song Recommender",
    repoUrl: "https://github.com/megalopsychos/ai-chatbot-song-recommender",
    description: "An AI-powered chatbot that recommends songs based on user preferences.",
    image: "/projects/debussy.png",
    logo: <FaGlobe className="text-blue-600" />,
    details: [
      "Built with Python and Torch for conversational AI.",
      "Used Selenium for data scraping and APIs for fetching music data.",
      "Deployed to cloud for real-time interaction.",
    ]
  },
  {
    title: "Signature Verification System",
    repoUrl: "https://github.com/megalopsychos/signature-verification",
    description: "A CNN-based signature verification system to detect forged signatures.",
    image: "/projects/sig_ver.png",
    logo: <FaDatabase className="text-green-600" />,
    details: [
      "Implemented using Python and Deep Learning.",
      "Trained a CNN on a labeled dataset of signatures.",
      "User-friendly interface for uploading and verifying signatures."
    ]
  },
  {
    title: "Digital Journal (MERN + AI)",
    repoUrl: "https://github.com/megalopsychos/digital-journal",
    description: "A full-stack journaling app with AI-based sentiment analysis.",
    image: "/projects/digital-diary.png",
    logo: <FaGraduationCap className="text-indigo-600" />,
    details: [
      "Built using MERN stack (MongoDB, Express, React, Node.js).",
      "Integrated sentiment analysis for mood insights.",
      "Responsive UI with secure CRUD functionality."
    ]
  },
  {
    title: "Full Stack Youtube Clone",
    liveUrl: "https://youtube-clone-nuxt.vercel.app",
    description: "A functional clone of YouTube featuring video playback and search",
    image: "/projects/youtube-clone-preview.png",
    logo: <FaYoutube className="text-red-600" />,
    details: [
      "Used Nuxt.js and Tailwind CSS for responsive, accessible design.",
      "Integrated YouTube API for video search and playback.",
      "Applied server-side rendering (SSR) and optimized state management."
    ]
  },
];


export default function WorkPage() {
  return (
    <div className="space-y-10 py-4">
      <h1 className="text-3xl mb-6">Projects</h1>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-lg flex items-center gap-3">
              <span className="text-xl">{project.logo}</span>
              {project.title}
            </h2>
            
            <div className="flex gap-4">
              {project.repoUrl && (
                <Link 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GitHub repo
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Live Site
                </Link>
              )}
            </div>

            {project.image && (
              <div className="w-full rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={450}
                  quality={75}
                  priority={index < 2}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  className="w-full h-auto"
                />
              </div>
            )}
            
            <p className="text-lg">{project.description}</p>
            
            <ul className="list-disc pl-6 space-y-2 text-sm">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
