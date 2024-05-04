import styled from '@emotion/styled'
import { Box as _Box, Heading as _Text } from 'theme-ui';

export const Frame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("./assets/images/bg-login.jpeg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const BoxForm = styled(_Box)`
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  width: 80vh;
  height: 60vh;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const BoxSection = styled(_Box)`
  * + * {
    margin-bottom: 8px;
  }
`;

export const TextHeader = styled(_Text)`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  width: 100%;
`;