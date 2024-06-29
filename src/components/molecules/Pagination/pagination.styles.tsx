import { Button, Flex, Label as _Label } from "theme-ui";
import styled from '@emotion/styled';
import { motion } from "framer-motion";
import { Label } from "../../atoms";

export const Container = styled(motion.div)`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

export const TypeParam = styled(Flex)`
  margin-top: 0px !important;
  align-content: center;
  align-items: center;
`;

export const LabelParam = styled(Label)`
  font-weight: 600;
  color: var(--gray-600);
  width: fit-content;
  margin-right: 10px;
`;

export const WrapperChild = styled(Button)`
  cursor: pointer;
  padding: 8px;
  margin-top: 0px !important;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
`;