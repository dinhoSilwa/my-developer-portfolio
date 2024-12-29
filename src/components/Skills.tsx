import { svgIcons } from "../assets/skills";

export const Skills = () => {
  return (
    <section className="mb-32 flex flex-col justify-center gap-8 items-center ">
      <header className="text-center flex gap-1 flex-col">
        <h2 className="text-extra font-bold text-white">Minhas Habilidades</h2>
        <p className="text-light-primary/90 mobile-small:px-6">
          Tecnologias e linguagens que uso no meu dia a dia profissional
        </p>
      </header>
      <div className="container-skill lg:w-[968px]  flex p-8 flex-wrap justify-center items-center gap-12 lg:px-18 lg:h-[400px] xl:px-20">
        {svgIcons.map(({ name, icon: Icon }, index) => (
          <div
            key={index}
            className="skills flex flex-col justify-center items-center gap-6 filter hover:drop-shadow-[0px_5px_35px_#07793166] cursor-pointer transition-all duration-500 group"
          >
            <Icon key={name} />
            <span className="text-medium-second text-light-primary font-second transition-colors duration-500 group-hover:text-blue-400 rounded-full">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
