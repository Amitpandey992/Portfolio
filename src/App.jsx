import React, { useState, useEffect } from "react";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiAntdesign,
  // SiMaterialui,
  SiPostgresql,
  SiMysql,
  SiNginx,
  SiRedis,
  SiVercel,
  SiPostman,
  SiGit,
  SiSpotify,
  SiSnapchat,
} from "react-icons/si";
import {
  FaBars,
  FaTimes,
  FaBriefcase,
  FaHeart,
  FaCode,
  FaReddit,
  FaAws,
  FaTwitter,
} from "react-icons/fa";
import { ReactComponent as RedditIcon } from "./assets/icons/reddit.svg";
// Icon wrapper component to handle undefined icons
const IconWrapper = ({ icon: Icon, ...props }) => {
  if (!Icon) return null;
  return <Icon {...props} />;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["Full-stack Developer👩‍💻", "Programmer🤖", "Problem Solver🪄"];

  // Typing animation effect
  useEffect(() => {
    const role = roles[currentRole];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < role.length) {
        setTypedText(role.substring(0, index + 1));
        index++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText("");
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    {
      name: "MongoDB",
      icon: <IconWrapper icon={SiMongodb} className="text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <IconWrapper icon={SiExpress} className="text-gray-400" />,
    },
    {
      name: "React",
      icon: <IconWrapper icon={SiReact} className="text-cyan-400" />,
    },
    {
      name: "Node.js",
      icon: <IconWrapper icon={SiNodedotjs} className="text-green-600" />,
    },
    {
      name: "Next.js",
      icon: <IconWrapper icon={SiNextdotjs} className="text-white" />,
    },
    {
      name: "NestJS",
      icon: <IconWrapper icon={SiNestjs} className="text-red-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <IconWrapper icon={SiTailwindcss} className="text-teal-400" />,
    },
    {
      name: "Material UI",
    },
    {
      name: "Ant Design",
      icon: <IconWrapper icon={SiAntdesign} className="text-blue-600" />,
    },
    {
      name: "PostgreSQL",
      icon: <IconWrapper icon={SiPostgresql} className="text-blue-700" />,
    },
    {
      name: "MySQL",
      icon: <IconWrapper icon={SiMysql} className="text-orange-500" />,
    },
    {
      name: "Nginx",
      icon: <IconWrapper icon={SiNginx} className="text-green-600" />,
    },
    {
      name: "Redis",
      icon: <IconWrapper icon={SiRedis} className="text-red-600" />,
    },
    {
      name: "AWS",
      icon: <IconWrapper icon={FaAws} className="text-orange-400" />,
    },
    {
      name: "Vercel",
      icon: <IconWrapper icon={SiVercel} className="text-white" />,
    },
    {
      name: "Postman",
      icon: <IconWrapper icon={SiPostman} className="text-orange-500" />,
    },
    {
      name: "Git",
      icon: <IconWrapper icon={SiGit} className="text-orange-600" />,
    },
    {
      name: "Cursor",
      icon: <IconWrapper />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "TheRox Event-organization",
      description:
        "A sleek event management web app featuring a secure admin dashboard. Admins can log in, upload images, videos, and manage events dynamically. Includes media optimization and a modern, responsive UI.",

      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "ImageKit",
        "JWT",
      ],

      link: "https://event-management-webapp-client.onrender.com/",
    },
    {
      id: 2,
      title: "GymBuddy",
      description:
        "A social fitness community app that connects passionate gym enthusiasts within their local area. Users can chat in real-time, discover nearby gyms, and build connections with like-minded individuals. Real-time communication implemented using WebSockets.",

      tech: [
        "React",
        "Tailwind CSS",
        "Radix UI",
        "Node.js",
        "Express.js",
        "Websocket",
        "JWT",
        "AWS",
      ],

      link: "https://github.com/Amitpandey992/gymbuddy-webap/",
    },
    {
      id: 3,
      title: "Shopidise",
      description:
        "A fully functional e-commerce platform with user authentication, product listings, and integrated payment gateway. Designed for smooth performance and modern UI experience.",

      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Clerk",
        "Vercel",
      ],

      link: "https://shopidise.netlify.app/",
    },
    {
      id: 4,
      title: "Youtube-Clone",
      description:
        "A YouTube-inspired video streaming platform that allows users to explore and watch videos. Integrated with RapidAPI to fetch video content and channel details. Built with a responsive layout and intuitive interface.",

      tech: ["React", "Material UI", "Rapid API", "Netlify", "Redux-toolkit"],

      link: "https://clone-youtube-web.netlify.app/",
    },
    {
      id: 5,
      title: "Restaurant Website",
      description:
        "A visually appealing restaurant website designed with elegant visuals and smooth scroll animations. Fully responsive and user-friendly.",

      tech: ["React", "Tailwind CSS", "JavaScript", "Netify"],

      link: "https://modern-gericht-restaurant.netlify.app/",
    },
    {
      id: 6,
      title: "Business Banking Platform",
      description:
        "A responsive modern banking website with interactive UI components and a clean design. Tailored for showcasing banking services and features in a professional layout.",

      tech: ["React", "Tailwind CSS", "JavaScript", "Netlify"],

      link: "https://modern-bank-web.netlify.app/",
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      duration: "2024 - Present",
    },

    {
      title: "Front End Developer",
      company: "Tryidol Technology",
      duration: "Nov 2024 - Jan 2025",
    },
    {
      title: "Full stack Developer",
      company: "Alina softwares",
      duration: "May 2025 - Present",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <IconWrapper icon={SiGithub} />,
      url: "https://github.com/Amitpandey992",
      color: "white",
    },
    {
      name: "LinkedIn",
      icon: <IconWrapper icon={SiLinkedin} />,
      url: "https://www.linkedin.com/in/amit7582",
      color: "blue",
    },
    {
      name: "Instagram",
      icon: <IconWrapper icon={SiInstagram} />,
      url: "https://www.instagram.com/a_.mit0/",
      color: "pink",
    },
    {
      name: "Twitter",
      icon: <IconWrapper icon={FaTwitter} />,
      url: "https://x.com/Amitpaney992",
      color: "blue",
    },
    {
      name: "Reddit",
      icon: <IconWrapper icon={FaReddit} />,
      url: "https://www.reddit.com/user/Amitpandey992/",
      color: "orange",
    },
    {
      name: "Spotify",
      icon: <IconWrapper icon={SiSpotify} />,
      url: "https://open.spotify.com/user/3145hovjragk4xqlrv2bw545nt54",
      color: "green",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "25+", label: "GitHub Repositories" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/y.jpg')",
          filter: "brightness(0.3)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 bg-gradient-to-b from-black/80 to-gray-900/80 text-gray-200 min-h-screen">
        {/* Mobile Navigation */}
        <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md p-4 flex justify-between items-center border-b border-gray-800">
          <h1 className="text-lg sm:text-xl font-bold text-white">
            Amit Pandey
          </h1>
          <button onClick={toggleMenu} className="text-2xl text-gray-300">
            {isMenuOpen ? (
              <IconWrapper icon={FaTimes} />
            ) : (
              <IconWrapper icon={FaBars} />
            )}
          </button>
        </div>
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
          } overflow-hidden border-b border-black`}
        >
          <div className="flex flex-col space-y-3 p-4">
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-left text-base sm:text-lg capitalize transition-colors ${
                  activeSection === item
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-0">
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4"
          >
            <div className="text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
                Amit Pandey
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-gray-300 h-8 sm:h-10">
                <span className="border-r-2 border-gray-300 animate-pulse pr-1">
                  {typedText}
                </span>
              </div>
              {/* <p className="text-sm sm:text-base text-gray-400 max-w-sm sm:max-w-md mx-auto">
                Passionate Full-stack Developer creating impactful digital
                solutions.
              </p>
              <div className="flex justify-center  sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500  ${
                      social.name === "GitHub"
                        ? `hover:text-${social.color} `
                        : `hover:text-${social.color}-500 `
                    } transition-colors duration-300 text-xl sm:text-2xl`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div> */}

              <div className="max-w-4xl mx-auto">
                {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">
                  About Me
                </h2> */}
                <div className="flex flex-col items-center gap-6 sm:gap-8">
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-gray-300 mb-10 ">
                      I'm a Full-stack Developer with a passion for building
                      scalable, robust and end-to-end applications. I thrive on
                      solving complex problems and continuously expanding my
                      knowledge in technology.
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-10">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            {stat.number}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          {/* <section id="about" className="py-12 sm:py-16 md:py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">
                About Me
              </h2>
              <div className="flex flex-col items-center gap-6 sm:gap-8">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-gray-300 mb-10 ">
                    I'm a Full-stack Developer with a passion for building
                    scalable, robust and end-to-end applications. I thrive on
                    solving complex problems and continuously expanding my
                    knowledge in technology.
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-10">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                          {stat.number}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Experience Section */}
          <section
            id="experience"
            className="py-12 sm:py-16 md:py-20 px-4 bg-black"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">
                Experience
              </h2>
              <div className="space-y-6 sm:space-y-8 lg:ml-24">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 sm:pl-8 border-l-2 border-gray-800"
                  >
                    <div className="absolute -left-3 sm:-left-4 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center border-2 border-gray-700 shadow-lg">
                      <IconWrapper
                        icon={FaBriefcase}
                        className="text-gray-300 text-sm sm:text-base"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {exp.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 sm:py-16 md:py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">
                Some of my work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 ">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-black rounded-lg p-3 sm:p-4 border border-gray-800 shadow-lg flex flex-col justify-between space-y-5 "
                  >
                    <div className="flex items-center justify-center mb-4">
                      <FaCode className="w-16 h-16 text-gray-400 hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-1 sm:px-2 py-0.5 sm:py-1 bg-black text-gray-300 text-[10px] sm:text-xs rounded border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-col bg-gray-200 ">
                      {/* <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded hover:bg-gray-700 border border-gray-700"
                      >
                        Code
                      </a> */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-xs sm:text-sm rounded hover:from-gray-700 hover:to-gray-600 border border-gray-700"
                      >
                        <div className="flex items-center justify-center gap-1 text-black">
                          Live
                          {/* <MdArrowOutward className="mb-1" /> */}
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="py-12 sm:py-16 md:py-20 px-4 bg-black"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">
                Technology That I use Daily
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1 sm:space-x-2 bg-black p-2 sm:p-3 rounded-lg border border-gray-800 shadow-lg"
                  >
                    <span className="text-lg sm:text-xl">{skill.icon}</span>
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-12 sm:py-16 md:py-20 px-4 bg-transparent mt-56"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">
                You can find me here
              </h2>

              <div className="flex justify-center items-center space-x-3 sm:space-x-4 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 ${
                      social.name === "GitHub"
                        ? `hover:text-${social.color} `
                        : `hover:text-${social.color}-500 `
                    }  transition-colors duration-300 text-2xl sm:text-3xl`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 sm:py-8 px-4 bg-black text-center border-t border-gray-800">
            <p className="text-gray-400 text-sm sm:text-base">
              Crafted with{" "}
              <IconWrapper icon={FaHeart} className="inline text-red-400" /> by
              Amit Pandey
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              © {new Date().getFullYear()} Amit Pandey. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
