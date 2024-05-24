import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { HEADER_HEIGHT } from '@/components/Header';
import { NAV_HEIGHT } from '@/components/Nav/Nav';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d8ffda;
  width: 56.3vh;
  height: 100vh;
  /* height: calc(100% + ${HEADER_HEIGHT}px + ${NAV_HEIGHT}px); */
  transition: opacity 0.2s;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={logo} alt="logo" />
    </LoadingContainer>
  );
};

export default Loading;