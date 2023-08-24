import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Divider,
  Avatar,
  Stack,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 4,
        textAlign: "center",
        backgroundColor: "primary.back",
        minHeight: "50vh",
      }}
    >
      <Box className="myContainer" maxWidth="lg" p={2}>
        <Grid container spacing={3}>
          <Grid item xs={7} md={4}>
            {/* Contact Information */}
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>

            <Typography paragraph>
              Have any questions or inquiries? Feel free to reach out to us. We
              are here to help and answer your queries.
            </Typography>

            {/* Multiple Links */}
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>

            <Link
              href="https://www.happypawsbd.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              Visit Our Website
            </Link>

            <br />
            <Link href="mailto:contact@happypawsbd.com" color="primary">
              Email Us
            </Link>

            <br />
            <Link href="tel:+1234567890" color="primary">
              Call Us
            </Link>
          </Grid>

          <Grid item xs={5} md={3}>
            {/* Contact Information */}
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>

            <Typography paragraph>
              Have any questions or inquiries? Feel free to reach out to us. We
              are here to help and answer your queries.
            </Typography>

            {/* Multiple Links */}
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>

            <Link
              href="https://www.happypawsbd.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              Visit Our Website
            </Link>

            <br />
            <Link href="mailto:contact@happypawsbd.com" color="primary">
              Email Us
            </Link>

            <br />
            <Link href="tel:+1234567890" color="primary">
              Call Us
            </Link>
          </Grid>

          <Grid item xs={12} md={5}>
            {/* Google Map Embed */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3651.815358466866!2d90.43777407440786!3d23.753962888641347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ1JzE0LjMiTiA5MMKwMjYnMjUuMyJF!5e0!3m2!1sen!2sbd!4v1692904836509!5m2!1sen!2sbd"
              style={{
                border: 1,
                borderColor: "black",
                width: "100%",
                height: "300px",
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
      <Box
        component="footer"
        sx={{
          pt: 3,
          textAlign: "center",
        }}
      >
        <Stack direction={"row"} variant="body2" justifyContent={"center"}>
          {" © "} {new Date().getFullYear()} Happy Paws BD. Developed by{" "}
          <a
            className="span2"
            href="https://www.facebook.com/nasif28/"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp; Nasif Jihan &nbsp;
          </a>
          <Avatar
            alt="Remy Sharp"
            src="./../../../images/Nasif.png"
            sx={{ width: 24, height: 24 }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
