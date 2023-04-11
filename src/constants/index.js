import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    wordpress,
    arduino,
    meta,
    starbucks,
    tesla,
    wildcats,
    startupwebsites,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bernadette,
    monyalle,
    melvin,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "wordpress",
    //   icon: wordpress,
    // },
    {
      name: "arduino",
      icon: arduino,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Ali Web Solutions",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Wix Freelance Developer",
      company_name: "Startup Websites",
      icon: startupwebsites,
      iconBg: "#E6DEDD",
      date: "June 2021 - Present",
      points: [
        "Use Wix's tools to create websites for clients, either from scratch or by customizing existing templates.",
        "Utilizing Software as a Service (SaaS) tools to meets customer needs and requirements. ",
        "Developing engaging content, selecting relevant images, and optimizing SEO for website growth.",
        "Analyzing data: utilizing analytics and metrics to track user behavior and website performance.", 
      ],
    },
    {
      title: "Arduino - C Programming Language Robotics Instructor",
      company_name: "Thornton Township High School",
      icon: wildcats,
      iconBg: "#383E56",
      date: "Aug 2014 - May 2021",
      points: [
        "Explaining concepts such as variables, functions and loops in an engaging manner.",
        "Guiding students through the basics of circuitry, wiring and programming.",
        "Helping students troubleshoot any issues they might have and offer advice on how to improve their project.",
        "Guiding students through creating their own projects that integrate Arduino with other components.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I tried making my website myself and it was a disaster. Will came through and saved me a lot of time.",
      name: "Bernadette Wright",
      designation: "Owner",
      company: "Indiana Garza Fat Loss Camps",
      image: bernadette,
    },
    {
      testimonial:
        "Anytime I have any issues related to my website, I can call Will and he answers. He is helpful and dependable.",
      name: "Monyalle Girten",
      designation: "Owner",
      company: "Monster Bouncy Houses",
      image: monyalle,
    },
    {
      testimonial:
        "After Will optimized our website, we've been able to see our website move up the ranks on google search engine!",
      name: "Melvin Armstrong",
      designation: "CEO",
      company: "Diversified General Contractors",
      image: melvin,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };