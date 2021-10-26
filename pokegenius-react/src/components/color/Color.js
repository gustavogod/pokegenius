import styled, { css } from 'styled-components';

export const Color = (props) => {
  const { className } = props;

  return (
    <DivColor className={className} />
  );
}

const DivColor = styled.div`
  border: 5px solid black;

  ${ props => 
    (props.className === 'green' && css`
      grid-area: green-button;
      background-color: var(--green);
      border-top-left-radius: 100%;
    `) ||
    (props.className === 'red' && css`
      grid-area: red-button;
      background-color: var(--red);
      border-top-right-radius: 100%;
    `) ||
    (props.className === 'yellow' && css`
      grid-area: yellow-button;
      background-color: var(--yellow);
      border-bottom-left-radius: 100%;      
    `) ||
    (props.className === 'blue' && css`
      grid-area: blue-button;
      background-color: var(--blue);
      border-bottom-right-radius: 100%;      
    `)
  }

  :hover {
    filter: brightness(200%);
    cursor: pointer;
  }
`;