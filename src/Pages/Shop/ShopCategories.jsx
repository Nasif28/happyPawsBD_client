import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import ShopItemCard from './ShopItemCard';
import ShopItem from "./ShopItem";
// import ShopItem from "./../../API/shopItems.json";

const ShopCategories = ({ category, items }) => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" gutterBottom>
      {category}
    </Typography>
    <Grid container spacing={3}>
      {items.slice(0, 3).map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <ShopItem item={item} />
        </Grid>
      ))}
    </Grid>
    <Button
      component={Link}
      to={`/category/${category.toLowerCase()}`}
      variant="contained"
      sx={{ mt: 2 }}
    >
      See All
    </Button>
  </Box>
);

export default ShopCategories;

// import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import React from "react";

// const categories = [
//   { name: "Food", image: "https://i.ibb.co/RY2WrWx/Pet-Food-Trends-Main-Banner-png.webp" },
//   { name: "Medicines", image: "https://yourwebsite.com/images/medicines.jpg" },
//   {
//     name: "Accessories",
//     image: "https://yourwebsite.com/images/accessories.jpg",
//   },
//   { name: "Other", image: "https://yourwebsite.com/images/other.jpg" },
// ];

// const ShopCategories = () => {
//   return (
//     <Grid container spacing={3} style={{ padding: 24 }}>
//       {categories.map((category, index) => (
//         <Grid item xs={12} sm={6} md={3} key={index}>
//           <Card>
//             <CardMedia
//               component="img"
//               height="140"
//               image={category.image}
//               alt={category.name}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {category.name}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ShopCategories;
