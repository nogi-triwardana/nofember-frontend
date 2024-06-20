import { Global, css } from "@emotion/react";
import { theme } from "./default.theme";

export const GlobalStyles = () => {
  return (
    <Global
      styles={
        css`
          :root {
            --border-table-color: ${theme?.colors?.borderColorTable};
            --bg-light: ${theme?.colors?.bgLight};
            --gray-200: ${theme?.colors?.gray200};
            --blue50: ${theme?.colors?.blue50};
            --blue100: ${theme?.colors?.blue100};
            --blue200: ${theme?.colors?.blue200};
            --blue300: ${theme?.colors?.blue300};
          }

          *:focus {
            outline: none;
          }
        `
      }
    />
  )
};