import { GameBoard, HeaderMenu } from '../../components'
import styled from 'styled-components';

export function App() {
  return (
    <Container>
      <HeaderMenu />
      <GameBoard />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;