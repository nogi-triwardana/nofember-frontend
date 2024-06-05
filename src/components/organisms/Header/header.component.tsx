import React, { useRef } from "react";
import { Container } from "./header.styles";
import { Box, Avatar } from "theme-ui";
import AvatarImg from '../../../assets/icons/avatar.svg';
import { Dropdown } from "../../molecules";
import { DropdownMenu } from "../../../constants";

const Header = () => {
  const dropdownRef: any = useRef(null);

  return (
    <Container>
      <Dropdown
        ref={dropdownRef}
        menus={DropdownMenu}
      >
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar
            onClick={() => dropdownRef?.current?.onSwitchHandler()}
            src={AvatarImg}
            sx={{
              backgroundColor: 'white',
              width: '40px',
              height: '40px',
              cursor: 'pointer'
            }}
          />
        </Box>
      </Dropdown>
    </Container>
  );
};

export default Header;