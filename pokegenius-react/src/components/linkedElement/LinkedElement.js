import styled from 'styled-components';
import { string } from 'prop-types';


export const LinkedElement = (props) => {
  const { href, target, children } = props;

  return (
    <Item href={href} target={target}>
      {children}
    </Item>
  );
}

const Item = styled.a`
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;