"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Censono Tech Website",
    desc: "Website designed to help users discover and get more information on Censono Tech.",
    link: "https://censonotech.com.ng",
  },
  {
    img: "/image/blog4.svg",
    title: "NOUN University Website",
    desc: "University website for the National Open University of Nigeria with lot of sub-systems in it.",
    link: "https://nou.edu.ng",
  },
  {
    img: "/image/blog2.svg",
    title: "NOUN SPGS Website",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    link: "https://spgs.nou.edu.ng",
  },
  {
    img: "/image/blog3.svg",
    title: "NOUN News and Events System",
    desc: "News and Events System (Blog) for the National Open University of Nigeria for information purpose.",
    link: "https:nou.edu.ng/news-and-events/",
  },
  {
    img: "/image/blog4.svg",
    title: "Financial Management System",
    desc: "Financial Management System for managing of incoming and outgoing funds for the NILEST (Prototype).",
    link: "",
  },{
    img: "/image/blog2.svg",
    title: "Students' College Portal",
    desc: "Portal to register students, facilitate e-payment of School fees and course registration for students.",
    link: "https://college.censonotech.com.ng",
  },
  {
    img: "/image/blog3.svg",
    title: "Portfolio Website",
    desc: "Matur Innocent Joshua's Portfolio Website to showcase his designs and projects.",
    link: "",
  },
  {
    img: "/image/blog4.svg",
    title: "AI Chat Bot",
    desc: "A chat system designed to facilitate conversation between Humans and AI Bot, thus providing answers to questions.",
    link: "https://ai.censonotech.com.ng",
  },
  
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a web app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
