import styled from 'styled-components';
import { oneOf, string } from 'prop-types';

//This component can be updated to accept other social media logos

const linkedinImgLogo = {
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  alt: "Linkedin platform logo"
};

const githubImgLogo = {
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  alt: "Github platform logo"
};

export const SocialMediaLogo = (props) => {
  const { href, className } = props;

  return (
    <LogoLink href={href} target="_blank">
      <ImgLogo 
        { ...
          ((className === "linkedin" && linkedinImgLogo) ||
          (className === "github" && githubImgLogo)) 
        } 
        className={className} 
      />
    </LogoLink>
  );
}

SocialMediaLogo.propTypes = {
  href: string.isRequired,
  className: oneOf(['linkedin', 'github'])
}

const LogoLink = styled.a`
  text-decoration: none;
  margin: 0 5px;
`;

const ImgLogo = styled.img`
  width: 30px;
  height: 30px;  
`;