import React, { useState } from "react";
import { Badge, Box, Grid, IconButton, Typography } from "@mui/material";
import products from "./../../API/shopItems.json";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import Filters from "./Filters";
import ProductList from "./ProductList";
import ProductDetailDialog from "./ProductDetailDialog";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopBanner from "./ShopBanner";

const Shop = ({ cartItemsCount }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    productTypes: [],
    priceRange: [0, 2000],
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  const handleCartClick = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);
  const handleAddToCart = (product) => setCartItems([...cartItems, product]);
  const handleRemoveFromCart = (product) =>
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setDetailDialogOpen(true);
  };
  const handleDetailDialogClose = () => setDetailDialogOpen(false);

  const filteredProducts = products.filter(
    (product) =>
      (filters.categories.length === 0 ||
        filters.categories.includes(product.category)) &&
      (filters.productTypes.length === 0 ||
        filters.productTypes.includes(product.type)) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1] &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className="myContainer">
      <ShopBanner />
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Typography variant="h6" color="initial">
          Search
        </Typography>
        <Box mx={5} sx={{ flexGrow: 1 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Box>
        <IconButton color="inherit" onClick={handleCartClick}>
          <Badge badgeContent={cartItemsCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      <CartDrawer
        cartOpen={cartOpen}
        handleCartClose={handleCartClose}
        cartItems={cartItems}
        removeFromCart={handleRemoveFromCart}
      />

      <Grid container spacing={5} pt={2} id="ShopProducts">
        <Grid item xs={12} sm={4} md={2}>
          <Filters
            categories={[...new Set(products.map((p) => p.category))]}
            productTypes={[...new Set(products.map((p) => p.type))]}
            priceRange={[0, 2000]}
            setFilters={setFilters}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={10}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Products
          </Typography>
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        </Grid>
      </Grid>
      {selectedProduct && (
        <ProductDetailDialog
          product={selectedProduct}
          open={detailDialogOpen}
          onClose={handleDetailDialogClose}
          onAddToCart={handleAddToCart}
        />
      )}
    </Box>
  );
};

export default Shop;

// import React from "react";
// import ShopCategories from "./ShopCategories";
// import ShopBanner from "./ShopBanner";
// import ShopItem from "./../../API/shopItems.json";
// import { Box } from "@mui/material";

// const categories = [
//     'Food',
//     'Medicines',
//     'Accessories',
//     'Other',
//     'All'
//   ];

// const Shop = () => {
//   return (
// <Box className="myContainer">
// <ShopBanner />
//     {categories.map((category) => (
//       <ShopCategories
//         key={category}
//         category={category}
//         items={ShopItem.filter(item => item.category === category)}
//       />
//     ))}
//   </Box>

//   );
// };

// export default Shop;
