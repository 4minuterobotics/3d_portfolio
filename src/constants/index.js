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
    ali,
    wildcats,
    startupwebsites,
    shopify,
    carrent,
    jobit,
    tripguide,
    amazona,
    drewit,
    will,
    mosnter,
    diversified,
    startup,
    shockfat,
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "arduino",
      icon: arduino,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Ali Web Solutions",
      icon: ali,
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
      name: "E-commerce Store",
      description:
        "An online store that allows users to create an account, search for items, and pay using PayPal or Stripe. Includes an admin dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb, PayPal, Stripe",
          color: "green-text-gradient",
        },
        {
          name: "react bootstap",
          color: "pink-text-gradient",
        },
      ],
      image: amazona,
      source_code_link: "https://github.com/4minuterobotics/amazonClone",
      website_link: "https://wills-store-git-main-4minuterobotics.vercel.app/",
    },
    {
      name: "AI Image Generator",
      description:
        "Web application that takes a prompt from users, converts it to an image, and saves it on a cloud with the option to post it to the home page.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb, openAI, cloudinary",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: drewit,
      source_code_link: "https://github.com/4minuterobotics/MERN-AI-image-generator",
      website_link: "https://drew-it-git-main-4minuterobotics.vercel.app/",
    },
    {
      name: "3D Personal Portfolio",
      description:
        "A 3D themed web app of a web developer portfolio, displaying usage capability of 3D animation programming.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "emailjs",
          color: "green-text-gradient",
        },
        {
          name: "threejs, tailwind, framer motion ",
          color: "pink-text-gradient",
        },
      ],
      image: will,
      source_code_link: "https://github.com/4minuterobotics/3d_portfolio/",
      website_link: "https://williamlawrence.tech",
    },
    {
      name: "Bouncy House Rental",
      description:
        "An outdoor party rental business app, capable of scheduling bookings, receiving payments, and Saas functionality.",
      tags: [
        {
          name: "WIX",
          color: "blue-text-gradient",
        },
      ],
      image: mosnter,
      source_code_link: "",
      website_link: "https://www.monsterbouncyhouses.com",
    },
    {
      name: "Web Developement Agency",
      description:
        "A web development agency app which displays graphic design, web design, and annimation portfolios, along with a dynamic questionairre for potential clients.",
      tags: [
        {
          name: "WIX",
          color: "blue-text-gradient",
        },
      ],
      image: startup,
      source_code_link: "",
      website_link: "https://www.startupwebsites.design",
    },
    {
      name: "Crossfit Gym",
      description:
        "An app for a small gym that allows its customers to view changing schedules, order supplements, and watch live stream workouts.",
      tags: [
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
      ],
      image: shockfat,
      source_code_link: "",
      website_link: "https://www.shockfat.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };