/** @jsxImportSource theme-ui */
import { Sidebar } from "../../organisms/Sidebar";
import { Box, Flex } from "theme-ui";
import { Header } from "../../organisms/Header";

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