import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import infoIcon from "../../../../../assets/images/icons/info.png";

const Role = ({
  id,
  title,
  items,
  expanded,
  onChangeRole,
  onRoleItemClick,
}) => {
  const itemsValue = Object.values(items);
  const itemsValueLength = itemsValue.length;
  return (
    <Accordion
      square
      disableGutters
      expanded={expanded === id && itemsValueLength > 0}
      onChange={onChangeRole(id)}
    >
      <AccordionSummary
        expandIcon={
          expanded !== id && (
            <ArrowRightIcon sx={{ width: 30, height: 30 }} fontSize="large" />
          )
        }
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        classes={{ content: "items-center" }}
        sx={{
          ...(expanded === id && {
            bgcolor: "secondary.main",
            color: "common.white",
          }),
          "&.MuiSvgIcon-root": { mr: -1.25 },
        }}
      >
        <Box
          sx={{
            minWidth: 19,
            minHeight: 19,
            bgcolor: "prePrimary.main",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "common.white",
            fontSize: 12,
            fontWeight: 500,
            mr: 1.25,
          }}
          component="span"
        >
          {itemsValueLength}
        </Box>
        <Typography variant="captionBold">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "background.alternate", p: 0 }}>
        <List>
          {itemsValue.map(({ id: itemId, title: itemTitle }) => (
            <ListItem key={itemId} disablePadding>
              <ListItemButton
                sx={{ px: 1.25, py: 0.625 }}
                onClick={() => onRoleItemClick(id, itemId, itemTitle)}
              >
                <Box component="span" sx={{ mr: 1.25 }}>
                  <img src={infoIcon} alt="info" />
                </Box>
                <ListItemText
                  sx={{ my: 0 }}
                  primary={<Typography variant="small">{itemTitle}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default Role;
