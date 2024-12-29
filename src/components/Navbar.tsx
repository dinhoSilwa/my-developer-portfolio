import { GithubIcon } from "../assets/github";
import { LinkedinIcon } from "../assets/linkedin";
import { AiFillBehanceCircle } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

const navigations = [
  {
    name: "Home",
    nav: "#home",
  },
  {
    name: "Sobre",
    nav: "#about",
  },
  {
    name: "Stacks",
    nav: "#stack",
  },
  {
    name: "Projetos",
    nav: "#projects",
  },
  {
    name: "Contacts",
    nav: "#Contacts",
  },
];

const navSocialIcons = [
  {
    name: "Github",
    nav: "https:github/users/dinhosilwa",
    icon: <GithubIcon />,
  },
  {
    name: "Linkedin",
    nav: "https:github/users/dinhosilwa",
    icon: <LinkedinIcon />,
  },
  {
    name: "Behance",
    nav: "https:github/users/dinhosilwa",
    icon: (
      <AiFillBehanceCircle fill="#A7A7A7" height={30} width={30} size={32} />
    ),
  },
];

export const NavBar = () => {
  const [isOpenMobileMenu, setisOpenMobileMenu] = useState<boolean>(false);
  return (
    <nav className="z-50 w-[100vw] px-4 lg:px-[10%] relative h-24 flex justify-end items-center gap-12">
      <div className="font-primary text-[12px] font-bold text-light-primary uppercase flex items-end gap-1 flex-1">
        Claudio silva
      </div>

      <div
        className={`w-screen h-screen lg:w-auto lg:h-auto lg:relative lg:top-0 lg:py-0 lg:flex-row lg:left-0 absolute top-20 left-1/2 py-24 transform transition-all duration-500 ease-in-out  bg-dark-primary flex flex-col items-center gap-12 justify-start text-light-primary font-second ${
          isOpenMobileMenu
            ? "lg:relative -translate-x-1/2 lg:translate-x-0"
            : "lg:relative text-blue-300 lg:text-light-primary translate-x-1/2 lg:translate-x-0"
        }`}
      >
        {navigations.map(({ name, nav }, index) => (
          <a
            href={nav}
            key={index}
            className="hover:text-blue-200 transition-colors duration-300 text-medium-second md:text-medium"
          >
            {name}
          </a>
        ))}
      </div>

      <div
        className={`flex gap-4 transition-all duration-300 ${
          isOpenMobileMenu
            ? "absolute top-24"
            : "absolute top-24 transform translate-x-[150%] md:top-0 md:translate-x-0 md:translate-y-0 md:relative"
        } `}
      >
        {navSocialIcons.map(({ name, nav, icon }, index) => (
          <span className="w-8 h-8 flex items-center justify-center rounded-full">
            <a href={nav} key={index} title={name}>
              {icon}
            </a>
          </span>
        ))}
      </div>
      <RiMenu3Fill
        fill="#A7A7A7"
        height={30}
        width={30}
        size={32}
        className="lg:hidden cursor-pointer active:scale-75 rounded-full"
        onClick={() => setisOpenMobileMenu(!isOpenMobileMenu)}
      />
    </nav>
  );
};
