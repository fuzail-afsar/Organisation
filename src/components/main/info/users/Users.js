import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Tabs from "../../../UI/tabs/Tabs";
import Roles from "./roles/Roles";
import UserList from "./UserList";
import UserSearch from "./UserSearch";
import hazelImage from "../../../../assets/images/users/hazel-sahlgren.jpg";
import cooperImage from "../../../../assets/images/users/cooper-jameson.jpg";
import AddUser from "./AddUser";

const users = [
  { name: "Steve Banks", email: "steve@meliometrics.com", isMail: false },
  {
    name: "Hazel Sahlgren",
    email: "hazel@example.com",
    imageUrl: hazelImage,
    isMail: false,
  },
  { name: "Mason Grayson", email: "grayson@example.com", isMail: true },
  {
    name: "Cooper Jameson",
    email: "jameson@example.com",
    imageUrl: cooperImage,
    isMail: false,
  },
];

const Users = () => {
  const [filterUsers, setfilterUsers] = useState(users);
  const searchHandler = (filteredUsers) => setfilterUsers(filteredUsers);

  return (
    <Grid container spacing={3.25}>
      <Grid item xs={12} md={3.6}>
        <Box sx={{ border: 1, borderColor: "secondary.border" }}>
          <UserSearch users={users} onSearch={searchHandler} />
          <UserList users={filterUsers} />
          <AddUser />
        </Box>
      </Grid>
      <Grid item xs={12} md={8.4}>
        <Tabs
          id="detail"
          showBorder={true}
          tabs={[
            {
              label: "User details",
              content: <Roles />,
            },
            {
              label: "Roles",
              content: <Roles />,
            },
            {
              label: "Other association",
              content: <Roles />,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Users;
