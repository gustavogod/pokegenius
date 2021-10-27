import styled from 'styled-components';
import { element, string } from 'prop-types';


export const LinkedElement = (props) => {
  const { href, target, children } = props;

  return (
    <Item href={href} target={target}>
      {children}
    </Item>
  );
}

LinkedElement.propTypes = {
  href: string.isRequired,
  target: string,
  children: element.isRequired
}

const Item = styled.a`
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;