import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress } from "react-icons/fa";
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
    <div className="bg-gradient-to-r from-blue-600 to-sky-600">
      <div className="container mx-auto flex justify-center items-center py-10">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 lg:px-28 xl:px-44">
          <div>
            <FaHtml5 className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <FaCss3 className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <FaJs className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiTypescript className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <FaReact className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiVite className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <Image
              src="/nextjs-logotype-dark-background.svg"
              alt="Next.js"
              width={96}
              height={96}
              className="sm:w-24 sm:h-24 select-none"
            />
          </div>
          <div>
            <FaWordpress className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiTailwindcss className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiMantine className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiNextui className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiRedux className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiMysql className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiPostgresql className="text-4xl sm:text-6xl text-white" />
          </div>
          <div>
            <SiMongodb className="text-4xl sm:text-6xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;
