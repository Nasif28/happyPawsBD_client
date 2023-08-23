import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const AdoptionDetails = () => {
  return (
    <Box className="myContainer" mt={5}>
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
            ADOPTERS WELCOME
          </Typography>

          <Typography variant="body2" color="primary.para" mb={4}>
            Here at The Happy Paws BD, our Adoptions Department approaches
            adopting our homeless pets in need with an open end approach
            philosophy inspired by the coined term 'Adopters Welcome' by The
            Humane Society of the Bangladesh. Some ways that The Animal
            Foundation embodies this philosophy is by removing outdated barriers
            for our community to adopt
          </Typography>
        </Box>

        <Box flex={1.4}>
          <Typography
            variant="h5"
            color="primary.headline"
            fontWeight={700}
            my={2}
          >
            ADOPTION REQUIREMENTS
          </Typography>

          <Typography variant="body2" color="primary.para" pl={5}>
            <ul>
              <li>
                Must be 18+ years old to adopt a cat & 21+ years old to adopt a
                dog
              </li>
              <li>Must have positive vet check</li>
              <li>
                All pets in the home must be up-to-date on vaccines &
                spayed/neutered unless medically excused with vet note
              </li>
              <li>Renters must show proof of pet policy lease</li>
              <li>
                Potential adopter must reply within 24 hours once notified or
                our adoption counselors will contact the next eligible applicant
              </li>
              <li>
                Must have animal spayed/neutered when adopted or by 6 months of
                age. (This may be extended to 1 year of age for large breed dogs
                if provided with a vet note.)
              </li>
            </ul>
          </Typography>
        </Box>
      </Stack>

      <Typography variant="h5" color="primary.headline" fontWeight={700} my={2}>
        HOW TO ADD A NEW PET TO YOUR FAMILY
      </Typography>

      <Typography variant="body2" color="primary.para" pl={5}>
        <ul>
          <li>
            Visit{" "}
            <a className="span1" href="/adoption/adoptable_pets">
              Adoptable Pets
            </a>{" "}
            and write down the animal ID you want to adopt before you fill up
            the{" "}
            <a className="span1" href="/adoption/adoption_form">
              Adoption Application
            </a>
            .
          </li>

          <li>
            Adoptions take place on a first-come, first-served basis for walk-in
            traffic.
          </li>

          <li>
            Submitting the form, you will be added to a waiting list. You must
            have at least one animal ID# to be added to the waiting list.
          </li>

          <li>
            Please note, patrons sometimes line up before we open to meet a pet,
            especially during fee-waived adoption events.
          </li>

          <li>We do not place holds on pets.</li>

          <li>
            Please do not bring your current pets with you to the shelter. We do
            not allow in-shelter dog-to-dog introductions. The shelter is a
            strange and stressful place for most pets.
          </li>
        </ul>
      </Typography>
    </Box>
  );
};

export default AdoptionDetails;
