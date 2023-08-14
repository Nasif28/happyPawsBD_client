import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme/Theme";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

// Pets -----------------------------
import Pet_Info from "./Pages/Pets/Pet Info/Pet_Info";
import Daycare from "./Pages/Pets/Daycare/Daycare";
import Boarding from "./Pages/Pets/Boarding/Boarding";
import Pet_Training from "./Pages/Pets/Pet Training/Pet_Training";
import Adoption from "./Pages/Pets/Adoption/Adoption";
import AdoptionForm from "./Pages/Pets/Adoption/AdoptionForm";
import RescueAlert from "./Pages/Pets/Rescue Alert/RescueAlert";
import Lost_Found from "./Pages/Pets/Lost & Found/Lost_Found";
import LostPets from "./Pages/Pets/Lost & Found/LostPets";
import FoundPets from "./Pages/Pets/Lost & Found/FoundPets";
import LostForm from "./Pages/Pets/Lost & Found/LostForm";
import FoundForm from "./Pages/Pets/Lost & Found/FoundForm";

// Shop -----------------------------------
import Food from "./Pages/Shop/Food/Food";
import Medicine from "./Pages/Shop/Medicine/Medicine";
import Accessories from "./Pages/Shop/Accessories/Accessories";

// Veterinary ----------------------------------
import Online_Consultation from "./Pages/Veterinary/Online Consultation/Online_Consultation";
import In_Person_Consultation from "./Pages/Veterinary/In Person Consultation/In_Person_Consultation";
import Nearest_Clinic from "./Pages/Veterinary/Nearest Clinic/Nearest_Clinic";
import House_Calls from "./Pages/Veterinary/House Calls/House_Calls";
import Health_Care_Blog from "./Pages/Veterinary/Health Care Blog/Health_Care_Blog";
import Covid19_Info from "./Pages/Veterinary/Covid19 Info/Covid19_Info";

// Get Involve --------------------------
import Volunteer from "./Pages/Get Involve/Volunteer/Volunteer";
import Make_Donation from "./Pages/Get Involve/Make Donation/Make_Donation";
import Our_Success_Story from "./Pages/Get Involve/Our Success Story/Our_Success_Story";
import Share_Your_Story from "./Pages/Get Involve/Share Your Story/Share_Your_Story";
import Remembrance from "./Pages/Get Involve/Remembrance/Remembrance";
import Reviews from "./Pages/Get Involve/Reviews/Reviews";

import About_Us from "./Pages/About US/About_Us";
import Contact_Us from "./Pages/Contact Us/Contact_Us";
import Footer from "./Components/Footer/Footer";



const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Pets --------------------------------  */}
          <Route path="/pet_info" element={<Pet_Info />} />
          <Route path="/daycare" element={<Daycare />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/pet_training" element={<Pet_Training />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/adoption/adoption_form" element={<AdoptionForm />} />
          <Route path="/rescue_alert" element={<RescueAlert />} />
          <Route path="/lost_found" element={<Lost_Found />} />
          <Route path="/lost_found/lost_pets" element={<LostPets />} />
          <Route path="/lost_found/found_pets" element={<FoundPets />} />
          <Route path="/lost_found/lost_form" element={<LostForm />} />
          <Route path="/lost_found/found_form" element={<FoundForm />} />

          {/* Shop ---------------------------------------  */}
          <Route path="/food" element={<Food />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/accessories" element={<Accessories />} />

          {/* Veterinary --------------------------------------  */}
          <Route
            path="/online_consultation"
            element={<Online_Consultation />}
          />
          <Route
            path="/in_person_consultation"
            element={<In_Person_Consultation />}
          />
          <Route path="/nearest_clinic" element={<Nearest_Clinic />} />
          <Route path="/house_calls" element={<House_Calls />} />
          <Route path="/health_care_blog" element={<Health_Care_Blog />} />
          <Route path="/covid19_info" element={<Covid19_Info />} />

          {/* Get Involve -----------------  */}
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/make_donation" element={<Make_Donation />} />
          <Route path="/our_success_story" element={<Our_Success_Story />} />
          <Route path="/share_your_story" element={<Share_Your_Story />} />
          <Route path="/remembrance" element={<Remembrance />} />
          <Route path="/reviews" element={<Reviews />} />

          <Route path="about_us" element={<About_Us />} />
          <Route path="contact_us" element={<Contact_Us />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
