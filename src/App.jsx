import "./App.css";
import "./styles.css";
import "react-multi-carousel/lib/styles.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme/Theme";
import { Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";

// import Header from "./Components/Header/Header";
import Header2 from "./Components/Header/Header2";
import Home from "./Pages/Home/Home";

// Pets -----------------------------
import Pet_Info from "./Pages/Pets/Pet Info/Pet_Info";
import PetCare from "./Pages/Pets/Pet Care/PetCare";
import DayCareAll from "./Pages/Pets/Pet Care/DayCareAll";
import DayCareDetails from "./Pages/Pets/Pet Care/DayCareDetails";
import PetBoardingAll from "./Pages/Pets/Pet Care/PetBoardingAll";
import PetBoardingDetails from "./Pages/Pets/Pet Care/PetBoardingDetails";
import PetGroomingAll from "./Pages/Pets/Pet Care/PetGroomingAll";
import PetGroomingDetails from "./Pages/Pets/Pet Care/PetGroomingDetails";
import Pet_Training from "./Pages/Pets/Pet Training/Pet_Training";
import TrainingDetail from "./Pages/Pets/Pet Training/TrainingDetail";
import Adoption from "./Pages/Pets/Adoption/Adoption";
import AdoptablePets from "./Pages/Pets/Adoption/AdoptablePets";
import AdoptionForm from "./Pages/Pets/Adoption/AdoptionForm";
import RescueAlert from "./Pages/Pets/Rescue Alert/RescueAlert";
import Lost_Found from "./Pages/Pets/Lost & Found/Lost_Found";
import LostPets from "./Pages/Pets/Lost & Found/LostPets";
import FoundPets from "./Pages/Pets/Lost & Found/FoundPets";
import LostForm from "./Pages/Pets/Lost & Found/LostForm";
import FoundForm from "./Pages/Pets/Lost & Found/FoundForm";

// Shop -----------------------------------
import Shop from "./Pages/Shop/Shop";
import Food from "./Pages/Shop/Food/Food";
// import Medicine from "./Pages/Shop/Medicine/Medicine";
import Accessories from "./Pages/Shop/Accessories/Accessories";

// Veterinary ----------------------------------
import Online_Consultation from "./Pages/Veterinary/Online Consultation/Online_Consultation";
import In_Person_Consultation from "./Pages/Veterinary/In Person Consultation/In_Person_Consultation";
import FindVet from "./Pages/Veterinary/Find Vet/FindVet";
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

import About_Us from "./Pages/About Us/About_Us";
import Contact_Us from "./Pages/Contact Us/Contact_Us";
import Footer from "./Components/Footer/Footer";

import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Profile from "./Dashboard/Profile";
import Account from "./Dashboard/Account";
import Dashboard from "./Dashboard/Dashboard";
import ShopCategories from "./Pages/Shop/ShopCategories";
import ShopNav from "./Pages/Shop/ShopNav";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleCartClick = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <UserAuthContextProvider>
          {/* <Header /> */}
          <Header2 />
          <ShopNav
            handleCartClick={handleCartClick}
            cartItemsCount={cartItems.length}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* Pets --------------------------------  */}
            <Route path="/pet_info" element={<Pet_Info />} />
            <Route path="/petcare" element={<PetCare />} />
            <Route path="/petcare/daycare" element={<DayCareAll />} />
            <Route path="/petcare/daycare/:id" element={<DayCareDetails />} />
            <Route path="/petcare/boarding" element={<PetBoardingAll />} />
            <Route
              path="/petcare/boarding/:id"
              element={<PetBoardingDetails />}
            />
            <Route path="/petcare/grooming" element={<PetGroomingAll />} />
            <Route
              path="/petcare/grooming/:id"
              element={<PetGroomingDetails />}
            />
            <Route path="/pet_training" element={<Pet_Training />} />
            <Route path="/training/:id" element={<TrainingDetail />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route
              path="/adoption/adoptable_pets"
              element={<AdoptablePets />}
            />
            <Route
              path="/adoption/adoption_form"
              element={
                <ProtectedRoute>
                  <AdoptionForm />
                </ProtectedRoute>
              }
            />
            <Route path="/rescue_alert" element={<RescueAlert />} />
            <Route path="/lost_found" element={<Lost_Found />} />
            <Route path="/lost_found/lost_pets" element={<LostPets />} />
            <Route path="/lost_found/found_pets" element={<FoundPets />} />
            <Route
              path="/lost_found/lost_form"
              element={
                <ProtectedRoute>
                  <LostForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lost_found/found_form"
              element={
                <ProtectedRoute>
                  <FoundForm />
                </ProtectedRoute>
              }
            />

            {/* Shop ---------------------------------------  */}
            <Route path="/food" element={<Food />} />
            <Route path="/shop" element={<Shop />} />

            <Route path="/category/:category" component={ShopCategories} />
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
            <Route path="/findvet" element={<FindVet />} />
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

            {/* Single Route -----------------  */}
            <Route path="/about_us" element={<About_Us />} />
            <Route path="/contact_us" element={<Contact_Us />} />

            {/* User Route -----------------  */}
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
