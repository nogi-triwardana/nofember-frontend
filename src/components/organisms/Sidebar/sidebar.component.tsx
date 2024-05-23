/** @jsxImportSource theme-ui */
import { Menus } from "../../../constants";
import { Container, NestedMenu, UlStyled, buttonCollapse } from "./sidebar.styles";
import { FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion, useCycle } from 'framer-motion';

const sidebarVariants = {
  expanded: {
    width: 300,
  },
  collapsed: {
    width: 'auto',
  }
};

const buttonCollapseVariants = {
  collapsed: {
    rotate: 180
  },
  expanded: {
    rotate: 0
  }
};

const menuVariants = {
  expanded: {
    opacity: 1,
    scale: 1,
    x: '0%'
  },
  collapsed: {
    opacity: 0,
    scale: 0,
    x: '-50%'
  }
};

const Sidebar = () => {
  const [isOpen, cycleCollapse] = useCycle(true, false);

  return (
    <AnimatePresence>
      <Container 
        initial={"expanded"}
        variants={sidebarVariants}
        animate={!isOpen ? "collapsed" : "expanded"}
        transition={{
          duration: 1,
          ease: 'easeOut'
        }}
      >
        <motion.div
          sx={buttonCollapse}
          variants={buttonCollapseVariants}
          onTap={() => cycleCollapse()}
        >
          <FaArrowLeft />
        </motion.div>
        <UlStyled 
          sx={{ marginTop: 72 }}
        >
          {Menus.map(({ name, Icon }, key) => {
            return (
              <MenuItem
                key={key}
                name={name}
                Icon={Icon}
                isOpen={isOpen}
              />
            )
          })}
        </UlStyled>
      </Container>
    </AnimatePresence>
  );
};

const MenuItem = ({ key, name, Icon, isOpen }: any) => {
  return (
    <motion.li 
      key={'sidebar-menu-' + key}
    >
      <NestedMenu>
        <Icon 
          sx={{ color: 'primary' }} 
        />
        {isOpen && (
          <motion.span 
            key={'span'}
            sx={{ 
              color: 'primary', 
              fontWeight: 'bold', 
              fontSize: 16,
            }}
            variants={menuVariants}
            animate={"expanded"}
            initial={"expanded"}
            transition={{
              duration: 1
            }}
            exit={"collapsed"}
          >
            {name}
          </motion.span>
        )}
      </NestedMenu>
    </motion.li>
  );
}

export default Sidebar;