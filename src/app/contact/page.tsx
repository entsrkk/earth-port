import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

const Contactpage: React.FC = () => {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="flex justify-center gap-14 ">
        <div>
          <Image
            width={480}
            height={480}
            src={"/img/profile-earth.jpg"}
            alt=""
            className="rounded-3xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-black uppercase ">Contact Us</h2>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <FaFacebook className="w-12 h-12 fill-blue-500 " /> :{" "}
              <Link
                href="https://www.facebook.com/niti.surakongka"
                className="text-lg hover:font-semibold hover:text-blue-600"
              >
                Niti Surakongka
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://www.instagram.com/eearth_nt/"
                className="text-lg hover:font-semibold hover:text-blue-600"
              >
                eearth_nt
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <FaLine className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://line.me/ti/p/8XgcLYn8Cg"
                className="text-lg hover:font-semibold hover:text-blue-600"
              >
                091-758-2874
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="tel:0917582874"
                className="text-lg hover:font-semibold hover:text-blue-600"
              >
                091-758-2874
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://github.com/entsrkk"
                className="text-lg hover:font-semibold hover:text-blue-600"
              >
                entsrkk
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://www.linkedin.com/in/nitisurakongka/"
                className="text-lg hover:font-semibold hover:text-blue-600"
              >
                Niti Surakongka
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <FaMedium className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://medium.com/@niti2003s"
                className="text-lg hover:font-semibold hover:text-blue-600"
              >
                @niti2003s
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
