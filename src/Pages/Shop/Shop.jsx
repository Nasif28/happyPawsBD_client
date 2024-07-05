import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import products from "./../../API/shopItems.json";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import Filters from "./Filters";
import ProductList from "./ProductList";
import ProductDetailDialog from "./ProductDetailDialog";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    productTypes: [],
    priceRange: [0, 100],
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
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CartDrawer
        cartOpen={cartOpen}
        handleCartClose={handleCartClose}
        cartItems={cartItems}
        removeFromCart={handleRemoveFromCart}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Filters
            categories={[...new Set(products.map((p) => p.category))]}
            productTypes={[...new Set(products.map((p) => p.type))]}
            priceRange={[0, 100]}
            setFilters={setFilters}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h5" gutterBottom>
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
