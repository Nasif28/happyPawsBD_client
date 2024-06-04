import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const RescueDetails = () => {
  return (
    <Box className="myContainer" mt={5}>
      <Box textAlign={"center"} p={4}>
        <Typography
          variant="h5"
          color="primary.headline"
          fontWeight={900}
          mb={2}
        >
          Make a Difference: Report Animals Needing Emergency Rescue
        </Typography>

        <Typography variant="body1">
          "At HAPPY PAWS BD, we believe in the power of community.
          <br />
          If you come across an animal that is in distress, injured, or in need
          of immediate rescue, let us know so we can take action.
          <br />
          Your contribution can save a life."
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={6}
        sx={{ p: 4 }}
        flex={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box flex={1}>
          <Typography
            variant="h5"
            color="primary.headline"
            fontWeight={700}
            my={2}
          >
            CALL TO ACTION
          </Typography>

          <Typography
            variant="body1"
            color="primary.para"
            mb={1}
            fontWeight={700}
          >
            "Act Now to Save Lives"
          </Typography>

          <Typography variant="body2" color="primary.para" mb={4}>
            Every second counts when an animal is in need. Your action can make
            a difference. Report an animal in distress now.
          </Typography>

          <Typography
            variant="body1"
            color="primary.para"
            mb={1}
            fontWeight={700}
          >
            "Join Our Rescue Network"
          </Typography>

          <Typography variant="body2" color="primary.para" mb={4}>
            Become part of our rescue efforts. Your contribution can ensure that
            animals get the help they deserve.
          </Typography>
        </Box>

        <Box flex={1}>
          <Typography
            variant="h5"
            color="primary.headline"
            fontWeight={700}
            my={2}
          >
            EMERGENCY CONATCT
          </Typography>

          <Typography
            variant="body1"
            color="primary.para"
            mb={1}
            fontWeight={700}
          >
            "For Immediate Assistance"
          </Typography>

          <Typography variant="body2" color="primary.para" mb={4}>
            If you encounter an animal that requires immediate attention, please
            call our emergency hotline:{" "}
            <span className="span1">+8801983794542</span>.
          </Typography>

          <Typography
            variant="body1"
            color="primary.para"
            mb={1}
            fontWeight={700}
          >
            "Your Report Matters"
          </Typography>

          <Typography variant="body2" color="primary.para" mb={4}>
            Rest assured, your report will be treated with urgency. We are
            committed to responding to every rescue request promptly.
          </Typography>
        </Box>
      </Stack>

      <Box textAlign={"center"} p={4}>
        <Typography
          variant="h5"
          color="primary.headline"
          fontWeight={900}
          mb={2}
        >
          Together, We Can Make a Difference
        </Typography>

        <Typography variant="body1">
          Thank you for being a compassionate member of our community. With your
          help, we can provide a better life for animals in need.
          <br />
          Share our rescue page with your friends and family. Together, we can
          create a stronger network to save animals.
        </Typography>
      </Box>
    </Box>
  );
};

export default RescueDetails;
