import { Box } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, id, showBorder, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${id}panel-${index}`}
      aria-labelledby={`${id}-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            pt: 3,
            ...(showBorder && {
              borderRight: 1,
              borderBottom: 1,
              borderLeft: 1,
              borderColor: "secondary.border",
            }),
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};
export default TabPanel;
