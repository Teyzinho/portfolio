import GitHub from "@/public/github.svg";
import Linkedin from "@/public/linkedin.svg";
import Instagram from "@/public/instagram.svg";

import Link from "next/link";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="bg-gray-950 w-full h-32 text-white flex items-center justify-around flex-wrap">
      <p>Copyright © 2023. Todos Direitos Reservados</p>
      <SocialMedia/>
    </div>
  );
};

export default Footer;
