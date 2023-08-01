import Link from "next/link";

import GitHub from "@/public/github.svg";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-40 py-4 w-full bg-white shadow">
      <p className="font-medium md:text-3xl  text-xl tracking-tight">Thiago</p>

      <div className="flex gap-2">
        <Link href="https://github.com/Teyzinho" target="_blank">
          <GitHub width="25px" height="25px" alt="github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/thiago-silva-medeiros-tey/"
          target="_blank"
        >
          <Linkedin width="25px" height="25px" alt="github" />
        </Link>
        <Link href="https://www.instagram.com/thiagoteyz/" target="_blank">
          <Instagram width="25px" height="25px" alt="github" />
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
