import { GlobalStyles, useTheme } from "@mui/material";
import { PRIMARY } from "./themConfig";

const GlobalStyle = () => {
  const muiDefaultTheme = useTheme();
  const styles = {
    a: {
      color: PRIMARY,
    },
    ".flex": {
      display: "flex",
    },
    ".items-center": {
      alignItems: "center",
    },
    ".items-end": {
      alignItems: "flex-end",
    },
    ".text-decoration-none": {
      textDecoration: "none",
    },
    ".font-bold": {
      fontWeight: 500,
    },
    [muiDefaultTheme.breakpoints.down("sm")]: {
      ".fullwidth-xs": {
        width: "100%",
      },
      ".mb-10": {
        marginBottom: "10px !important",
      },
    },
  };
  return <GlobalStyles styles={styles} />;
};

export default GlobalStyle;
