import GitHub from "@/public/github.svg";
import Linkedin from "@/public/linkedin.svg";
import Instagram from "@/public/instagram.svg";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-950 w-full h-32 text-white flex items-center justify-around flex-wrap">
      <p>Copyright © 2023. Todos Direitos Reservados</p>
      <div className="flex gap-2">
        <Link href="https://github.com/Teyzinho" target="_blank">
          <GitHub width="25px" height="25px" alt="github" />
        </Link>
        <Link href="https://www.linkedin.com/in/thiago-silva-medeiros-tey/" target="_blank">
          <Linkedin width="25px" height="25px" alt="github" />
        </Link>
        <Link href="https://www.instagram.com/thiagoteyz/" target="_blank">
          <Instagram width="25px" height="25px" alt="github" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
