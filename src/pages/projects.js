import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/lud-legends.png";
import project2 from "../../public/images/projects/confeitaria-leide.png";
import SideBar from "@/components/SideBar";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
    border border-solid border-dark bg-light shadow-2xl p-12"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
      rounded-br-3xl" />
      <div className="absolute top-2 -right-5 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-gray-700 
      rounded-br-3xl" />
      <div className="absolute top-4 -right-7 -z-30 w-[102%] h-[103%] rounded-[2rem] bg-gray-600 
      rounded-br-3xl" />
      <div className="absolute top-6 -right-9 -z-40 w-[102%] h-[103%] rounded-[2rem] bg-gray-300 
      rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
      "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-r-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visite o Projeto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl" />
      <div className="absolute top-2 -right-5 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-gray-700 
      rounded-br-3xl" />
      <div className="absolute top-4 -right-7 -z-30 w-[102%] h-[103%] rounded-[2rem] bg-gray-600 
      rounded-br-3xl" />
      <div className="absolute top-6 -right-9 -z-40 w-[102%] h-[103%] rounded-[2rem] bg-gray-300 
      rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg
      "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visite
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon /> {""}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Alan Alves | Projetos</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-24">
          <AnimatedText
            text="A imaginação é o início de um sonho!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Lud Legends"
                summary="Projeto desenvolvido com HTML, CSS e JavaScript puros para criar um website responsivo, com o intuito de oferecer uma experiência prática e simplificada para ajudar pessoas que estão iniciando sua jornada no jogo Mobile Legends: Bang Bang.
                
                O website conta com uma interface intuitiva e fácil de usar, onde os usuários podem acessar informações essenciais sobre o jogo, como guias para personagens, dicas para iniciantes, estratégias de jogo e notícias atualizadas. A navegação é fluida e adaptável a diferentes dispositivos, garantindo uma experiência consistente em smartphones, tablets e computadores."
                link="https://lud-legends.vercel.app/"
                target="_blank"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/lud-legends"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Confeitaria da Leide"
                summary=""
                link="https://confeitaria-da-leide-i6m4jn65i-alan-alves-projects.vercel.app/"
                target="_blank"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/Confeitaria-da-Leide"
                img={project2}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Titlo do Projeto"
                summary="Descricao previa do projeto."
                link="/"
                type="Projeto em Destaque"
                github="/"
                img={project1}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Confeitaria da Leide"
                summary="Descricao previa do projeto."
                link="https://confeitaria-da-leide-i6m4jn65i-alan-alves-projects.vercel.app/"
                type="Projeto em Destaque"
                github="https://github.com/alanalveses/Confeitaria-da-Leide"
                target="_blank"
                img={project2}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Titlo do Projeto"
                summary="Descricao previa do projeto."
                link=""
                type="Projeto em Destaque"
                github="/"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Titlo do Projeto"
                summary="Descricao previa do projeto."
                link="/"
                type="Projeto em Destaque"
                github="/"
                img={project1}
              />
            </div>
          </div>
        <SideBar />
        </Layout>
      </main>
    </>
  );
};

export default projects;