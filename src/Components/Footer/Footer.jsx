import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Divider,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";

import NasifIcon from "./../../images/Nasif.png";
import HPBDLogo from "./../../images/HPBD-Logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        textAlign: "center",
        backgroundColor: "primary.back",
        // minHeight: "50vh",
      }}
    >
      <Box className="myContainer">
        <Grid container spacing={3} py={2}>
          <Grid item xs={12} md={4}>
            {/* Contact Information */}
            {/* Logo Full Screen ------------------------------------- */}
            <Typography
              variant="h6"
              component="a"
              href="../"
              sx={{ color: "inherit", textDecoration: "none", pt: 1 }}
            >
              <img src={HPBDLogo} alt="Happy Paws BD" width={150} />
            </Typography>
            <Typography fontWeight={900} variant="h5" gutterBottom>
            Happy Paws BD{" "}
            </Typography>

            <Typography
              color={"primary.para"}
              variant="body2"
              // textAlign={"justify"}
            >
              The "Happy Paws BD" project is a comprehensive pet website aimed
              at promoting pet welfare and providing a range of services to pet
              owners and enthusiasts.
            </Typography>

            <Box mt={2}>
              <Stack direction="row" justifyContent="space-evenly">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <FacebookOutlinedIcon />
                  </Avatar>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <InstagramIcon />
                  </Avatar>
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <YouTubeIcon />
                  </Avatar>
                </a>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <FmdGoodIcon />
                  </Avatar>
                </a>

                <a
                  href="https://mail.google.com/mail/u/0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <EmailIcon />
                  </Avatar>
                </a>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            {/* Contact Information */}
            <Typography variant="h5" fontWeight={700} mb={2} gutterBottom>
              Sitemap
            </Typography>

            {/* Multiple Links */}
            <Stack spacing={-2}>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>

              <br />
              <Link
                href="/adoption"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Adoption
              </Link>

              <br />
              <Link
                href="/rescue_alert"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Rescue
              </Link>

              <br />
              <Link
                href="/shop"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Shop
              </Link>
              <br />
              <Link
                href="/lost_found"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Lost & Found
              </Link>

              <br />
              <Link
                href="/health_care_blog"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Health Care Blog
              </Link>

              <br />
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            {/* Contact Information */}
            <Typography variant="h5" fontWeight={700} mb={2} gutterBottom>
              Support
            </Typography>

            {/* Multiple Links */}
            <Stack spacing={-2}>
              <Link
                href="/about_us"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>

              <br />
              <Link
                href="/contact_us"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>

              <br />
              <Link
                href="/petcare"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Pet Care
              </Link>

              <br />
              <Link
                href="/findvet"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Find Vet
              </Link>

              <br />

              <Link
                href="/pet_training"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Training
              </Link>

              <br />
              <Link
                href="/profile"
                target="_blank"
                rel="noopener noreferrer"
                color={"primary.para"}
                style={{ textDecoration: "none" }}
              >
                Profile
              </Link>

              <br />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Google Map Embed */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3651.815358466866!2d90.43777407440786!3d23.753962888641347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ1JzE0LjMiTiA5MMKwMjYnMjUuMyJF!5e0!3m2!1sen!2sbd!4v1692904836509!5m2!1sen!2sbd"
              style={{
                border: 1,
                borderColor: "black",
                width: "100%",
                height: "250px",
                borderRadius: "10px",
              }}
              allowFullScreen=""
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Box>

      <Divider variant="body">All Rights Reserved</Divider>

      {/* Footer */}
      {/* <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          alignItems="center"
          justifyContent="center"
          variant="body2"
        >
          <span>© {new Date().getFullYear()} Happy Paws BD. Developed by</span>
          <a
            className="span2"
            href="https://www.facebook.com/nasif28/"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp; Nasif Jihan &nbsp;
          </a>
          <Avatar
            alt="Nasif Jihan"
            src={NasifIcon}
            sx={{ width: 24, height: 24 }}
          />
        </Stack>
      </Box> */}
      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          alignItems="center"
          justifyContent="center"
          variant="body2"
        >
          <span>
            Copyright © {new Date().getFullYear()} Happy Paws BD. All rights
            reserved <br />
            Developed by Mahmudul
          </span>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
