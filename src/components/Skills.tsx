import { svgIcons } from "../assets/skills";

export const Skills = () => {
  return (
    <section className="flex flex-col justify-center items-center">
             <h2 className="text-extra font-bold text-white">Minhas Habilidades</h2>

      <div className="flex gap-4">
        {svgIcons.map(({ name, icon: Icon }, index) => (
          <span key={index}>
            <Icon key={name} className={"w-32"} />
          </span>
        ))}
      </div>
    </section>
  );
};
