import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.nav)`
  width: 200px;
  filter: drop-shadow(1px 1px 1px #4700b3);
`;

export const UlStyled = styled(motion.ul)`
  background: white;
  padding: 0px;
  li + li {
    border-style: solid;
    border-top-width: 1px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-color: rgb(226 232 240);
  }
`;

export const LiStyled = styled(motion.li)`
  list-style: none;
  padding: 20px;
  font-size: 14px;
  cursor: pointer;
`;