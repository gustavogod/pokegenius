import styled from 'styled-components';
import { SocialMediaLogo } from '../../components';

const linkedinProfileLink = "https://www.linkedin.com/in/gustavo-dias-22117012b/";
const githubProfileLink = "https://github.com/gustavogod"

export const Footer = () => {
  return (
    <FooterElement>
      <p>Desenvolvido por Gustavo Oliveira Dias</p>
      <SocialMedia>
          <SocialMediaLogo
            href={linkedinProfileLink}
            className="linkedin"
          />
          <SocialMediaLogo 
            href={githubProfileLink}
            className="github"
          />
      </SocialMedia>
    </FooterElement>
  );
}

const FooterElement = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(223, 223, 223);
  width: 100vw;
  
  p {
    color: black;
    font-weight: 500;
    font-size: 15px;
    text-align: center;    
  }
`;

const SocialMedia = styled.div`
  margin: 10px;
`;