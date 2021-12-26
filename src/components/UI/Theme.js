import {
  createTheme,
  CssBaseline,
  useTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import {
  BACKGROUND_ALTERNATE,
  BACKGROUND_ALTERNATE_LIGHT,
  BODY,
  FONT,
  PRE_PRIMARY,
  PRIMARY,
  SECONDARY,
  SECONDARY_BORDER,
  SECONDARY_BORDER_LIGHT,
  SECONDARY_LIGHT,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "./themConfig";

const Theme = ({ children }) => {
  const muiDefaultTheme = useTheme();
  const theme = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1090,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      type: "light",
      prePrimary: {
        main: PRE_PRIMARY,
      },
      primary: {
        main: PRIMARY,
      },
      secondary: {
        main: SECONDARY,
        light: SECONDARY_LIGHT,
        border: SECONDARY_BORDER,
        borderLight: SECONDARY_BORDER_LIGHT,
      },
      background: {
        default: BODY,
        alternate: BACKGROUND_ALTERNATE,
        alternateLight: BACKGROUND_ALTERNATE_LIGHT,
      },
      text: {
        primary: TEXT_PRIMARY,
        secondary: TEXT_SECONDARY,
      },
    },
    typography: {
      fontFamily: FONT,
      captionBold: {
        fontSize: "0.866rem",
        fontWeight: 500,
      },
      small: {
        fontSize: "0.75rem",
      },
      smallBold: {
        fontSize: "0.75rem",
        fontWeight: 500,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: PRE_PRIMARY,
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            marginBottom: -1,
          },
          indicator: {
            height: 4,
            top: 0,
            bottom: "unset",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: PRIMARY,
            borderTop: "1px solid",
            borderRight: "1px solid",
            borderLeft: "1px solid",
            borderColor: SECONDARY_BORDER,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            marginRight: 5,
            textTransform: "none",
            "&.Mui-selected": {
              backgroundColor: muiDefaultTheme.palette.common.white,
            },
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
          colorDefault: {
            backgroundColor: PRIMARY,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            "&:before": {
              backgroundColor: SECONDARY_BORDER,
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            minHeight: 30,
            paddingLeft: 10,
            paddingRight: 10,
          },
          content: {
            alignItem: "center",
            margin: "7px 0",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 100,
            textTransform: "none",
            minWidth: 110,
            "&.MuiButton-outlined": {
              backgroundColor: muiDefaultTheme.palette.common.white,
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            "&.MuiListItem-divider": {
              borderColor: SECONDARY_BORDER,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            fontSize: "0.875rem",
            padding: "10px 20px !important",
          },
        },
      },
    },
  };
  return (
    <>
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Theme;
