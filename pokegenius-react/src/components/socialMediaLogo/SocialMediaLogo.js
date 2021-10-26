import styled from 'styled-components';

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

const LogoLink = styled.a`
  text-decoration: none;
`;

const ImgLogo = styled.img`
  width: 30px;
  height: 30px;  
`;