import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Model/useWrapperScroll';
import { Container, Header, Logo, Burguer, Footer } from './styles';

export const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with ❤</a>
          </li>
          <li>
            <a href="#">by Douglas Oliveira</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};
