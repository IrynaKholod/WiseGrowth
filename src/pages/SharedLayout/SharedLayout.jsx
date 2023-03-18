import {  useState, useEffect , Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    setLogoLoaded(true); // устанавливаем класс при загрузке страницы
  }, []);

  return (
    <Wrapper>
      <Header>
        <Logo className={logoLoaded ? 'logo-loaded' : ''}>Growth Wise</Logo>
      </Header>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </Wrapper>
  );
};