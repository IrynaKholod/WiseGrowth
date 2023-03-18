import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  @media (mim-width: 768px) {
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 12px;
  padding: 16px 0;
  margin-bottom: 20px;
  background-color: rgba(72, 37, 209, 255);

  > nav {
    display: flex;
  }

  @media (min-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
`;

export const Logo = styled.p`
  font-family: Segoe UI;
  color: white;
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  transform: scale(0.5); /* начальный размер */
  transition: transform 0.5s ease-in-out; /* добавление плавного перехода */
  
  &.logo-loaded {
    transform: scale(1); /* конечный размер */
  }
`;
export const Wrapper = styled.div`
  background-color: white;
`;
