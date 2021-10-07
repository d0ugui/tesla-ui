import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

export const ModelOverlay: React.FC = ({ children }) => {
  const { scrollY } = useWrapperScroll();

  return <Container>{children}</Container>;
};
