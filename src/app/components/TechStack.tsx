import { FaReact, FaWordpress } from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiMantine,
  SiNextui,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import Image from "next/image";


const TechStackCarousel: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-sky-600 ">
      <div className="container mx-auto flex flex-col justify-center items-center py-12">
        <h2 className="text-3xl text-white text-center">Technologies I use</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:px-28 xl:px-40 sm:mt-2 ">
          <div>
            <FaReact className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300 " />
          </div>
          <div>
            <SiVite className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <Image
              src="/nextjs-logotype-dark-background.svg"
              alt="Next.js"
              width={96}
              height={96}
              className="w-20 h-20 sm:w-24 sm:h-24 select-none hover:scale-[1.4] duration-300"
            />
          </div>
          <div>
            <FaWordpress className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiTailwindcss className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiMantine className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiNextui className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiRedux className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiTypescript className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiMysql className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiPostgresql className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
          <div>
            <SiMongodb className="text-3xl sm:text-5xl text-white hover:scale-[1.4] duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;
