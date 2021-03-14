import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 20px;
  display: block;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Wrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  height: 100%;
`;
export { Box, Container, Wrap };