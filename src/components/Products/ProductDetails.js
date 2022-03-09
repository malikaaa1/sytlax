import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../context/ProductContext";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MemoryIcon from "@mui/icons-material/Memory";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Paper from "@mui/material/Paper";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import Comments from '../Comment/Comments'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Link } from "react-router-dom";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditProducts from "./EditProduct";
// import "./Product.css";
import { authContext } from "../../context/AuthContext";
import CheckroomIcon from '@mui/icons-material/Checkroom';


const ProductDetails = () => {
  let params = useParams().id;
  const {  productDetails, clickDelete, addProductToCart,editProductDetails } =
    useContext(productsContext);
    const {user}=useContext(  authContext)
    
  const [openmodal, setOpenmodal] = useState(false);
  

  

  return (
    <section className="product__block-details">
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid  item xs={6}>
            {
              <img
                src={productDetails.image}
                alt={productDetails.title}
                style={{ width: "85%" }}
              />
            }
            <Comments/>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              sx={{ fontWeight: 700, letterSpacing: 2 }}
            >
              {productDetails.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {productDetails.description}
            </Typography>
        </Grid>
       <Grid container spacing={2}>
      <Grid item xs={6}>

        <Box>
           <img style={{width: "500px", marginTop:"25px"}}
                src={productDetails.details}              
              />
        </Box>

        </Grid>
      <Grid item xs={6}>

        <Typography variant="body2" gutterBottom>
              {productDetails.description}
            </Typography>
           
        {user.email === "malika1@gmail.com" ? ( //password: 12345678
              <>
                <Grid style={{ display: "flex", marginBottom: "30px" }}>
                  <Grid item xs={6}>
                    <Link to="/">
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteForeverIcon/>}
                        fullWidth={true}
                        sx={{ mt: "20px", height: "50px" }}
                        onClick={() => clickDelete(params)}
                      >
                       
                        Удалить
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<DeleteForeverIcon />}
                      fullWidth={true}
                      sx={{ mt: "20px", height: "50px" }}
                      onClick={() => setOpenmodal(!openmodal)}
                    >
                      Редактировать
                    </Button>
                {openmodal && <EditProducts id={productDetails.id} />}
                  </Grid>
                </Grid>
              </>
            ) : null}
            
            </Grid>
            </Grid>
      
     
      </Grid>
      </Container>
    </section>
  );
};

export default ProductDetails;
