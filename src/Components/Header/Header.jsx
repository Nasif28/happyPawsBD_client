import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Image } from "@mui/icons-material";

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const drawerWidth = 200;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="myContainer" sx={{ display: "flex" }}>
      <AppBar
        color="default"
        component="nav"
        position="sticky"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          {/* Drawer Icon Button ----------------------------------- */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo Full Screen ------------------------------------- */}
          <Typography
            variant="h6"
            component="a"
            href="./"
            textAlign={{ xs: "center", md: "inherit" }}
            flexGrow={{ xs: "1", md: "0" }}
            sx={{ color: "inherit", textDecoration: "none", pt: 1 }}
          >
            <img
              src="./../../../images/HPBD-Logo.png"
              alt="Happy Paws BD"
              width={100}
            />
          </Typography>

          {/* Nav Item Full Screen --------------------------------- */}
          <Box
            sx={{
              mx: 4,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              sx={{
                px: 2,
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(122, 178, 89, 0.15)" },
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                px: 2,
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(122, 178, 89, 0.15)" },
              }}
            >
              Pets
            </Button>
            <Button
              sx={{
                px: 2,
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(122, 178, 89, 0.15)" },
              }}
            >
              Shop
            </Button>
            <Button
              sx={{
                px: 2,
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(122, 178, 89, 0.15)" },
              }}
            >
              Veterinary Services
            </Button>
            <Button
              sx={{
                px: 2,
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(122, 178, 89, 0.15)" },
              }}
            >
              Get Involved
            </Button>
            <Button
              sx={{
                px: 2,
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(122, 178, 89, 0.15)" },
              }}
            >
              About Us
            </Button>
            <Button
              sx={{
                px: 2,
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(122, 178, 89, 0.15)" },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Profile Setting Icon or Login ----------------------------- */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Nasif Jihan" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontWeight= "bold">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontWeight= "bold">Account</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontWeight= "bold">Dashboard</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontWeight= "bold">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Nav Menu Item -------------------------------------- */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 1 }}>
              <img
                src="./../../../images/HPBD-Logo.png"
                alt="Happy Paws BD"
                width={100}
              />
            </Typography>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "#D3D3D3" },
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "#D3D3D3" },
                  }}
                >
                  <ListItemText primary="Pets" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "#D3D3D3" },
                  }}
                >
                  <ListItemText primary="Shop" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "#D3D3D3" },
                  }}
                >
                  <ListItemText primary="Veterinary Services" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "#D3D3D3" },
                  }}
                >
                  <ListItemText primary="Get Involved" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "#D3D3D3" },
                  }}
                >
                  <ListItemText primary="About Us" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "#D3D3D3" },
                  }}
                >
                  <ListItemText primary="Contact Us" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
