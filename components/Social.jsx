import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/swarnendu-maity-34111624b/" },
  { icon: <FaGithub />, path: "https://github.com/swarnendu19" },
  { icon: <FaDiscord />, path: "https://discordapp.com/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
