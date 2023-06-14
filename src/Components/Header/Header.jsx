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
import { Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [menu1AnchorEl, setMenu1AnchorEl] = React.useState(null);
  const [menu2AnchorEl, setMenu2AnchorEl] = React.useState(null);
  const [menu3AnchorEl, setMenu3AnchorEl] = React.useState(null);
  const [menu4AnchorEl, setMenu4AnchorEl] = React.useState(null);

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
  // ----------------
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
  const handleMenu3Click = (event) => {
    setMenu3AnchorEl(event.currentTarget);
  };

  const handleMenu3Close = () => {
    setMenu3AnchorEl(null);
  };

  const handleMenu4Click = (event) => {
    setMenu4AnchorEl(event.currentTarget);
  };

  const handleMenu4Close = () => {
    setMenu4AnchorEl(null);
  };
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
          {/* <Box
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
          </Box> */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              mx: 4,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              sx={{
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              Home
            </Button>
            <Button
              // endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenu1Click}
              sx={{
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              Pets
              <KeyboardArrowDownIcon fontSize="12" />
            </Button>

            <Button
              // endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenu2Click}
              sx={{
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              Shop
              <KeyboardArrowDownIcon fontSize="12" />
            </Button>

            <Button
              // endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenu3Click}
              sx={{
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              Veterinary
              <KeyboardArrowDownIcon fontSize="12" />
            </Button>

            <Button
              // endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenu4Click}
              sx={{
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              Get Involve
              <KeyboardArrowDownIcon fontSize="12" />
            </Button>

            <Button
              sx={{
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              About Us
            </Button>
            <Button
              sx={{
                color: "inherit",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              Contact Us
            </Button>
          </Stack>

          {/* Nasted Menu Items ----------------------------------------- */}
          <Menu
            anchorEl={menu1AnchorEl}
            keepMounted
            open={Boolean(menu1AnchorEl)}
            onClose={handleMenu1Close}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={handleMenu1Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              PET INFO
            </MenuItem>
            <MenuItem
              onClick={handleMenu1Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              DAYCARE
            </MenuItem>
            <MenuItem
              onClick={handleMenu1Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              BOARDING
            </MenuItem>
            <MenuItem
              onClick={handleMenu1Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              PET TRAINING
            </MenuItem>
            <MenuItem
              onClick={handleMenu1Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              ADOPTION
            </MenuItem>
            <MenuItem
              onClick={handleMenu1Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              RESCUE ALERT
            </MenuItem>
            <MenuItem
              onClick={handleMenu1Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              LOST & FOUND
            </MenuItem>
          </Menu>

          <Menu
            anchorEl={menu2AnchorEl}
            keepMounted
            open={Boolean(menu2AnchorEl)}
            onClose={handleMenu2Close}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={handleMenu2Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              FOOD
            </MenuItem>
            <MenuItem
              onClick={handleMenu2Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              MEDICINE
            </MenuItem>
            <MenuItem
              onClick={handleMenu2Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              ACCESSORIES
            </MenuItem>
          </Menu>

          <Menu
            anchorEl={menu3AnchorEl}
            keepMounted
            open={Boolean(menu3AnchorEl)}
            onClose={handleMenu3Close}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={handleMenu3Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              ONLINE CONSULTATION
            </MenuItem>
            <MenuItem
              onClick={handleMenu3Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              IN-PERSON CONSULTATION
            </MenuItem>
            <MenuItem
              onClick={handleMenu3Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              NEAREST CLINIC
            </MenuItem>
            <MenuItem
              onClick={handleMenu3Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              HOUSE CALLS
            </MenuItem>
            <MenuItem
              onClick={handleMenu3Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              HEALTH CARE BLOG
            </MenuItem>
            <MenuItem
              onClick={handleMenu3Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              COVID-19 INFO
            </MenuItem>
          </Menu>

          <Menu
            anchorEl={menu4AnchorEl}
            keepMounted
            open={Boolean(menu4AnchorEl)}
            onClose={handleMenu4Close}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={handleMenu4Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              VOLUNTEER
            </MenuItem>
            <MenuItem
              onClick={handleMenu4Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              MAKE DONATION
            </MenuItem>
            <MenuItem
              onClick={handleMenu4Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              OUR SUCCESS STORY
            </MenuItem>
            <MenuItem
              onClick={handleMenu4Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              SHARE YOUR STORY
            </MenuItem>
            <MenuItem
              onClick={handleMenu4Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              REMEMBRANCE
            </MenuItem>
            <MenuItem
              onClick={handleMenu4Close}
              sx={{
                color: "inherit",
                fontWeight: "700",
                fontSize: "",
                "&:hover": { backgroundColor: "primary.back" },
              }}
            >
              REVIEWS
            </MenuItem>
          </Menu>

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
                <Typography textAlign="center" fontWeight="bold">
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontWeight="bold">
                  Account
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontWeight="bold">
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontWeight="bold">
                  Logout
                </Typography>
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
