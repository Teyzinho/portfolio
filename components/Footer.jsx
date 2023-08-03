
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="bg-gray-950 w-full pb-24 sm:pb-0 h-44 sm:h-32 text-white flex items-center justify-around flex-wrap">
      <p>Copyright © 2023. Todos Direitos Reservados</p>
      <SocialMedia />
    </div>
  );
};

export default Footer;
