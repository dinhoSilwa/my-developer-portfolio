import { useAvatar } from "../hooks/useFetchAvatar";

export const Hero = () => {
  const { avatarGithub, isErrorAvatar } = useAvatar();

  return (
    <section className="w-screen h-[80vh] px-4 items-center flex flex-col-reverse justify-center gap-[10%] lg:flex-row overflow-hidden">
      <p className="text-extra-second font-primary font-bold leading-10 text-white">
        Olá! 👋, <br />
        Meu nome é <br />
        <span className="text-green-500 hover:text-shadow">
          Cláudio Silva
        </span>{" "}
        <br />e sou desenvolvedor web.
      </p>

      <div className="w-[260px] h-[260px] flex items-center justify-center bg-red-50 rounded-full bg-gradient-to-r from-[#077931] to-[#0FE73E] relative">
        <img
          src={avatarGithub!}
          alt={isErrorAvatar ? "Não foi possivel buscar a imagem" : "Dinho"}
          className="rounded-full w-[90%] mx-auto hover:shadow-green transition-shadow duration-700"
        />
      </div>
    </section>
  );
};
