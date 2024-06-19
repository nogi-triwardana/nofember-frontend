/** @jsxImportSource theme-ui */
import { forwardRef, useImperativeHandle, useState } from "react";
import { LiStyled, NavContainer, UlStyled } from "./dropdown.styles";

const containerVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    x: '-20%',
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Dropdown = forwardRef(({ children, menus }: any, ref) => {
  const [isOpen, setIsOpen] = useState(false);


  useImperativeHandle(ref, () => {
    return {
      onSwitchHandler() {
        setIsOpen(prev => !prev);
      }
    }
  }, []);

  return (
    <NavContainer
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      {children}
      <UlStyled
        variants={containerVariants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {menus.map((menu: any, key: number) => (
          <LiStyled 
            key={"menu-dropdown-" + key}
            variants={itemVariants}
          >
            {menu?.name}
          </LiStyled>
        ))}
      </UlStyled>
    </NavContainer>
  );
});

export default Dropdown;