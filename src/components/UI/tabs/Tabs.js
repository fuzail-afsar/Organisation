import React, { useState } from "react";
import MuiTabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";

const Tabs = ({ tabs = [], id = "", showBorder = false }) => {
  const [value, setValue] = useState(1);
  const handleChange = (_, newValue) => setValue(newValue);

  const a11yProps = (index) => {
    return {
      id: `${id}-${index}`,
      "aria-controls": `${id}panel-${index}`,
    };
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "secondary.border" }}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          // scrollButtons
          // allowScrollButtonsMobile
        >
          {tabs.map(({ label }, index) => (
            <Tab key={label} label={label} {...a11yProps(index)} />
          ))}
        </MuiTabs>
      </Box>
      {tabs.map(({ content }, index) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
          id={id}
          showBorder={showBorder}
        >
          {content}
        </TabPanel>
      ))}
    </>
  );
};
export default Tabs;
