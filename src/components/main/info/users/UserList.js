import {
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import React, { useState } from "react";

import { avatarLetters } from "../../../../helper/helper";

const UserList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(users[0]?.email);
  const userListItemClickHandler = (email) => setSelectedUser(email);
  return (
    <List sx={{ py: 0, minHeight: { md: 511 } }}>
      {!users.length && (
        <ListItem divider>
          <ListItemText
            primary={
              <Typography variant="subtitle2">
                No search result founds
              </Typography>
            }
          />
        </ListItem>
      )}
      {users.map((user) => (
        <ListItem
          divider
          key={user.email}
          sx={{
            cursor: "pointer",
            ...(selectedUser === user.email && {
              bgcolor: "secondary.main",
            }),
          }}
          secondaryAction={
            user.isMail && (
              <IconButton edge="end" aria-label="email">
                <EmailIcon
                  sx={{
                    ...(selectedUser === user.email && {
                      color: "common.white",
                    }),
                  }}
                />
              </IconButton>
            )
          }
          onClick={() => userListItemClickHandler(user.email)}
        >
          <ListItemAvatar>
            {user.imageUrl ? (
              <Avatar
                sx={{ width: 48, height: 48 }}
                src={user.imageUrl}
                alt={user.name}
              />
            ) : (
              <Avatar sx={{ width: 48, height: 48 }}>
                {avatarLetters(user.name)}
              </Avatar>
            )}
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                variant="subtitle2"
                sx={{
                  ...(selectedUser === user.email && {
                    color: "common.white",
                  }),
                }}
              >
                {user.name}
              </Typography>
            }
            secondary={
              <Typography
                variant="small"
                component="p"
                sx={{
                  color: "text.secondary",
                  ...(selectedUser === user.email && {
                    color: "common.white",
                  }),
                }}
              >
                {user.email}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
