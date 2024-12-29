export const AboutMe = () => {
  return (
    <section className=" max-w-[968px] px-4 h-auto mb-32  mobile-small:px-4 lg:px-0 mx-auto flex flex-col">
      <h2 className="text-extra font-bold text-white">Sobre Min</h2>
      <article className=" text-light-primary text-medium mobile-small:text-larger flex flex-col gap-4">
        <p>
          Sou Claudio Silva, desenvolvedor web de Fortaleza, Ceará, com mais de
          2 anos de experiência em Desenvolvimento Frontend, utilizando{" "}
          <span className="font-black">React.js</span> ,{" "}
          <span className="font-black">Javascript</span> e{" "}
          <span className="font-black">Typescript</span> para criar interfaces
          modernas e responsivas.
        </p>
        <p>
          Atualmente, estou expandindo meus conhecimentos unindo tecnologia de
          ponta e design estratégico para resultados excepcionais. Tenho paixão
          por desempenho, acessibilidade e experiência do usuário, criando
          aplicações otimizadas e funcionais para qualquer dispositivo. Possuo
          experiência com <span className="font-black">APIs RESTful</span> e uso{" "}
          <span className="font-black">Git/GitHub</span> para versionamento e
          colaboração ágil.
        </p>

        <p>
          {" "}
          Idealizei a comunidade Frontend Fusion para fomentar aprendizado e
          atuo como voluntário no Grupo Símios e na ONG Alimentando com Amor,
          contribuindo com projetos de impacto social. Minha missão é
          transformar ideias em soluções digitais inovadoras que gerem valor e
          impactem vidas.
        </p>
      </article>
    </section>
  );
};
