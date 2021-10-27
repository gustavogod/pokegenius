import { GameBoard, HeaderMenu, Footer } from '../../components'
import styled from 'styled-components';

export function App() {
  
  return (
    <Container>
      <HeaderMenu />
      <GameBoard />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;