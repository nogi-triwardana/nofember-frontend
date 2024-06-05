import React from 'react';
import { BoxForm, BoxSection, Frame, TextHeader } from './login.styles';
import { Input, Button, Label, Checkbox } from '../../components/atoms';
import { Box, Link } from 'theme-ui';
import { css } from '@emotion/react';

const Login = () => {
  return (
    <Frame>
      <BoxForm p={16} as="form">
        <BoxSection>
          <TextHeader>Login</TextHeader>
        </BoxSection>
        <BoxSection>
          <Box>
            <Label htmlFor="username">Username</Label>
            <Input id="username" />
          </Box>
          <Box>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </Box>
          <Box css={css`
            display: flex;
            justify-content: space-between;
          `}>
            <Label>
              <Checkbox />
              Ingat saya
            </Label>
            <Box css={css`
              whitespace: nowrap
            `}>
              <Link href='#'>
                Lupa Password?
              </Link>
            </Box>
          </Box>
        </BoxSection>
        <BoxSection>
          <Button
            variant='primary'
          >
            Login
          </Button>
        </BoxSection>
      </BoxForm>
    </Frame>
  );
};

export default Login;