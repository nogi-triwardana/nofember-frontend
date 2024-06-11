/** @jsxImportSource theme-ui */
import { Sidebar, Header } from "../../organisms";
import { Box, Flex } from "theme-ui";

const Layout = ({ children }: any) => {
  return (
    <Flex>
      <Sidebar />
      <Box
        sx={{ width: '100%' }}
      >
        <Header />
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;