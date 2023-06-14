import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/material";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menu1AnchorEl, setMenu1AnchorEl] = React.useState(null);
  const [menu2AnchorEl, setMenu2AnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
  return (
    <AppBar position="static" color="default" sx={{ mt: 30 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          {/* Nav Logo ------------------------------------------------------------ */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Collapse Nav Section --------------------------------------------------------- */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Place1</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Place2</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Place3</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Place4</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Place6</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Collapse Nav Logo --------------------------------------------------------- */}

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="./"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Nav Section --------------------------------------------------------- */}

          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenu1Click}
            >
              Resources
            </Button>
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenu2Click}
            >
              Animal
            </Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Menu
            anchorEl={menu1AnchorEl}
            keepMounted
            open={Boolean(menu1AnchorEl)}
            onClose={handleMenu1Close}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
          >
            <MenuItem onClick={handleMenu1Close}>Blog</MenuItem>
            <MenuItem onClick={handleMenu1Close}>Podcast</MenuItem>
          </Menu>
          <Menu
            anchorEl={menu2AnchorEl}
            keepMounted
            open={Boolean(menu2AnchorEl)}
            onClose={handleMenu2Close}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby2": "animal-button",
            }}
          >
            <MenuItem onClick={handleMenu2Close}>Blog2</MenuItem>
            <MenuItem onClick={handleMenu2Close}>Podcast2</MenuItem>
          </Menu>

          {/* --------------------- */}
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
          {/* Open Setting Section ----------------------------------------------------- */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Nasif Jihan" src="/static/images/avatar/2.jpg" />
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
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
