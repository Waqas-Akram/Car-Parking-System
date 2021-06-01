import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const AboutArray = [
  {
    id: 1,
    bgImg: "/images/waqas_back.jpg",
    profile: "/images/waqas.png",
    name: "Waqas Akram",
    status: "MERN STACK Devloper",
    description:
      "I am a MERN Stack developer, I am able to work on backend as well as frontend technologies using javascript as a core language",
    facebook: <FacebookIcon className="text-info" />,
    twitter: <TwitterIcon className="text-info" />,
    instagram: <InstagramIcon className="text-danger" />,
    github: <GitHubIcon className="text-dark" />,
    linkedIn: <LinkedInIcon style={{ color: "#0A66C2" }} />,
    fb_link: "https://www.facebook.com/waqasassasin",
    tw_link: "https://twitter.com/Waqas__Akram",
    is_link: "https://www.instagram.com/waqas___akram/",
    git_link: "https://github.com/Waqas-Akram",
    linked_link: "https://www.linkedin.com/in/waqas-akram-2b5449154/",
  },
  {
    id: 2,
    bgImg: "/images/ali_back.jpg",
    profile: "/images/ali.jpg",
    name: "Ali Ahmad",
    status: "IOS Developer",
    description:
      " I am a IOS developer having hands on experience in flutter as well as swift programming. I am so passionated and feeling love in this development environment",
    facebook: <FacebookIcon className="text-info" />,
    linkedIn: <LinkedInIcon style={{ color: "#0A66C2" }} />,
    fb_link: " https://www.facebook.com/profile.php?id=100009737492393",
    linked_link: "https://www.linkedin.com/in/ali-ahmad-sabar-8048a5177/",
  },
  {
    id: 3,
    bgImg: "/images/talha_back.jpg",
    profile: "/images/talha.jpg",
    name: "Talha Khadim",
    status: "Frontend Developer",
    description:
      "I am a Frontend developer using modern erra technologies as well as some old like html5,css3 and bootstrap and React.js. I am feeling proud to have these skills ",
    facebook: <FacebookIcon className="text-info" />,
    twitter: <TwitterIcon className="text-info" />,
    linkedIn: <LinkedInIcon style={{ color: "#0A66C2" }} />,
    fb_link: "https://www.facebook.com/talha.khadim.118",
    tw_link: "https://twitter.com/iamtalha118",
    linked_link: "https://www.linkedin.com/in/talha-khadim-429223154/",
  },
];

export default AboutArray;
