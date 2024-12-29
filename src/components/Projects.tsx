import { BiGlobe } from "react-icons/bi";
import { useFetchProjects } from "../hooks/useProjects";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const { data } = useFetchProjects();
  return (
    <section className="max-w-[968px] h-auto lg:mx-auto">
      <header className="text-center flex gap-1 flex-col px-2">
        <h2 className="text-extra font-bold text-white">Projetos</h2>
        <p className="text-light-primary/90">O que construí até o momento</p>
      </header>
      <nav className="w-full mr-auto h-20 flex justify-center items-center gap-8">
        <span className="text-light-primary text-medium-second font-semibold font-primary hover:text-blue-400 transition-colors duration-200 cursor-pointer">
          Frontend
        </span>
        <span className="text-light-primary text-medium-second font-semibold font-primary hover:text-blue-400 transition-colors duration-200 cursor-pointer">
          Backend
        </span>
        <span className="text-light-primary text-medium-second font-semibold font-primary hover:text-blue-400 transition-colors duration-200 cursor-pointer">
          Fullstack
        </span>
        <span className="text-light-primary text-medium-second font-semibold font-primary hover:text-blue-400 transition-colors duration-200 cursor-pointer">
          Ui Design
        </span>
      </nav>

      <article className="mx-auto bg-zinc-900 flex flex-wrap justify-center gap-[2%] gap-y-20 container-projects">
        {data?.map(
          ({ name, image, description, skills, github, deploy }, index) => (
            <div
              key={index}
              className="group w-[300px] project h-[500px] flex flex-col justify-between gap-4 cursor-pointer transition-colors duration-300"
            >
              <figure className="hover:scale-105 relative rounded-lg w-[300px] h-[174px] overflow-hidden transition-transform duration-300 ">
                <img src={image} alt={name} />
              </figure>

              <div className="w-full font-second px-2 ">
                <h3 className="text-white font-bold font-primary">{name}</h3>
                <p className="text-light-primary leading-5 text-medium-second">
                  {description}
                </p>
              </div>

              <div className="flex gap-2">
                <p className="flex flex-wrap gap-2 px-2 py-1 font-semibold">
                  {skills.map(({ name }, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 text-[12px] bg-green-600/10 hover:bg-green-700 transition-colors duration-500 text-green-200 hover:text-green-300 font-bold rounded-full"
                    >
                      {name}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex gap-2 justify-start px-2">
                <a
                  href={github}
                  className="text-light-primary  flex items-center gap-2 hover:text-blue-500 font-semibold"
                >
                  <FaGithub /> Código
                </a>
                <a
                  href={deploy}
                  className="text-light-primary flex items-center gap-2 hover:text-blue-500 font-semibold"
                >
                  <BiGlobe /> Visualizar
                </a>
              </div>
            </div>
          )
        )}
      </article>
    </section>
  );
};
