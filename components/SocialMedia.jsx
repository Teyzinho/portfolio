import GitHub from "@/public/github.svg";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";
import Link from "next/link";

const SocialMedia = ({ className }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <Link href="https://github.com/Teyzinho" target="_blank">
        <GitHub
          width="25px"
          height="25px"
          alt="github"
          className="hover:text-blue-500 hover:scale-110 transition-all"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/thiago-silva-medeiros-tey/"
        target="_blank"
      >
        <Linkedin
          width="25px"
          height="25px"
          alt="github"
          className="hover:text-blue-500 hover:scale-110 transition-all"
        />
      </Link>
      <Link href="https://www.instagram.com/thiagoteyz/" target="_blank">
        <Instagram
          width="25px"
          height="25px"
          alt="github"
          className="hover:text-blue-500 hover:scale-110 transition-all"
        />
      </Link>
    </div>
  );
};

export default SocialMedia;
