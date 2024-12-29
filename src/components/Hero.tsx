import { useAvatar } from "../hooks/useFetchAvatar";

export const Hero = () => {
  const { avatarGithub, isErrorAvatar } = useAvatar();

  return (
    <section className="w-screen lg:w-[968px] lg:mx-auto h-[80vh] lg:px-0 items-center flex flex-col-reverse justify-center gap-[14%] lg:flex-row lg:justify-between overflow-hidden">
      <p className="px-4 lg:px-0 mobile-mini:px-4 mobile-small:text-extra-second text-extra leading-8 font-primary font-bold sm:leading-10 text-white">
        Olá! 👋, <br />
        Meu nome é <br />
        <span className="text-green-500 hover:text-shadow">
          Cláudio Silva
        </span>{" "}
        <br />e sou desenvolvedor web.
      </p>

      <div className="lg:mr-16 w-[260px] z-50 h-[260px] flex items-center justify-center bg-red-50 rounded-full bg-gradient-to-r from-[#077931] to-[#0FE73E] ">
        <img
          src={avatarGithub!}
          alt={isErrorAvatar ? "Não foi possivel buscar a imagem" : "Dinho"}
          className="rounded-full w-[90%] mx-auto hover:shadow-green transition-shadow duration-700"
        />
      </div>
    </section>
  );
};
