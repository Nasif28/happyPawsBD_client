import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header_3 = () => {
  const [menu1AnchorEl, setMenu1AnchorEl] = React.useState(null);
  const [menu2AnchorEl, setMenu2AnchorEl] = React.useState(null);

  const handleMenu1Click = (event) => {
    setMenu1AnchorEl(event.currentTarget);
  };

  const handleMenu1Close = () => {
    setMenu1AnchorEl(null);
  };

  const handleMenu2Click = (event) => {
    setMenu2AnchorEl(event.currentTarget);
  };

  const handleMenu2Close = () => {
    setMenu2AnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>

        <Typography variant="body1" onClick={handleMenu1Click}>
          Menu 1
        </Typography>
        <Menu
          anchorEl={menu1AnchorEl}
          keepMounted
          open={Boolean(menu1AnchorEl)}
          onClose={handleMenu1Close}
        >
          <MenuItem onClick={handleMenu1Close}>Item 1</MenuItem>
          <MenuItem onClick={handleMenu1Close}>Item 2</MenuItem>
          <MenuItem onClick={handleMenu1Close}>Item 3</MenuItem>
        </Menu>

        <Typography variant="body1" onClick={handleMenu2Click}>
          Menu 2
        </Typography>
        <Menu
          anchorEl={menu2AnchorEl}
          keepMounted
          open={Boolean(menu2AnchorEl)}
          onClose={handleMenu2Close}
        >
          <MenuItem onClick={handleMenu2Close}>Item 4</MenuItem>
          <MenuItem onClick={handleMenu2Close}>Item 5</MenuItem>
          <MenuItem onClick={handleMenu2Close}>Item 6</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header_3;
