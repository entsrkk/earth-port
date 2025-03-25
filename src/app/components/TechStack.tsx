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
import { RiNextjsFill } from "react-icons/ri";

const TechStackCarousel: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-sky-600 ">
      <div className="container mx-auto flex flex-col justify-center items-center py-8 sm:py-12">
        <h2
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          className="text-2xl sm:text-base text-white text-center"
        >
          Technologies I use
        </h2>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 px-2 lg:px-28 xl:px-40 mt-4"
        >
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <FaReact className="text-base sm:text-2xl text-white " />
            <p className="text-sm sm:text-lg">React</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiVite className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">Vite</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <RiNextjsFill className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">Next.js</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <FaWordpress className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">Wordpress</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiTailwindcss className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">TailwindCSS</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiMantine className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">Mantine</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiNextui className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">Nextui</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiRedux className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">Redux</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiTypescript className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">TypeScript</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiMysql className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">MySQL</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiPostgresql className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">PostgreSQL</p>
          </div>
          <div className="flex justify-center items-center text-white space-x-2 border border-white rounded-2xl px-5 py-1 hover:scale-110 lg:hover-drop-shadow duration-300">
            <SiMongodb className="text-base sm:text-2xl text-white" />
            <p className="text-sm sm:text-lg">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;
