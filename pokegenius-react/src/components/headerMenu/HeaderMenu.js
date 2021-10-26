import styled from 'styled-components';
import { LinkedElement } from '../../components';
import { appURL, repositoryURL, pokeImgPath } from '../../commons';

import pokeballImg from '../../img/pokegenius-img.png';

export const HeaderMenu = () => {

  return (
    <Header>
      <Menu>
        <HeaderLogo>
          <a href={appURL} rel="noreferrer">
            <ImgLogo />
          </a>
          <LinkedElement href={appURL}>
            <TextLogo>PokeGenius</TextLogo>
          </LinkedElement>
        </HeaderLogo>
        <AboutItem>
          <a href={repositoryURL} target="_blank">Sobre</a>
        </AboutItem>
      </Menu>
    </Header>    
  );
};

const Header = styled.header`
  position: relative;
  width: 100%;
  background-color: rgba(26, 26, 26, 0.9);
  height: 50px;
  z-index: 1;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: inherit;  
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    z-index: 2;
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }
`;

const ImgLogo = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  background-image: url(${pokeballImg});
  background-position: center;
  background-size: cover;
  margin: 0 5px 0 10px;
`;

const TextLogo = styled.h2`
  color: rgb(238, 0, 0);
  font-family: 'Teko', sans-serif;
  font-size: 2rem;
  margin: 0 5px;  
`;

const AboutItem = styled.div`
  a {
    text-decoration: none;
    font-size: 1rem;
    color: white;
    margin-right: 20px;

    :hover {
      color: rgb(238, 0, 0);      
    }
  }
`;