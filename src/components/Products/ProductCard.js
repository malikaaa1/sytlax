import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useProducts } from '../../context/ProductContext';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useAuth } from '../../context/AuthContext';
// import { checkProductInCart } from "../../helpers/cartFunctions";
import './ProductCard.css'
import { authContext } from "../../context/AuthContext";
import Modal from '../OrderForm/Modal';
import { display } from '@mui/system';

const ProductCard = ({ item }) => {
  const [likeCount, setLikeCount] = useState(item?.likes?.length)
  const [like, setLike] = useState(false);
  const [openmodal, setOpenmodal] = useState(false);

  const{
    // addProductToCart,
    addProductToFavs,
    checkProductInFavs,
  
    
  }=useProducts();
  const {user}=useContext(  authContext)

  const {
    user: { email },
  } = useAuth();

  const addUserLike = async (email, id) => {
    const { data } = await axios(`http://localhost:8000/products/${id}`);

    let emailToFind = data.likes.filter((user) => user === email);
    if (emailToFind.length == 0) {
      
      data.likes.push(email);
      
    } else {
      data.likes = data.likes.filter((item) => item !== email);
    }
    await axios.patch(`http://localhost:8000/products/${id}`, data);
    setLikeCount(data.likes.length);
    checkUserLike(email, id);
  };

  const checkUserLike = async (email, id) => {
    const { data } = await axios(`http://localhost:8000/products/${id}`);
    console.log(data);
    let found = data.likes.filter((user) => email === user);
    console.log(found);
    return found.length > 0 ? setLike(true) : setLike(false);
  };

  return (
    <Grid item className="GridCard" >
      <Card sx={{width: 1000,borderRadius: 0}} className="CardMain">
         <div className="dws-wrapper">
         <div>
           <CardMedia
           className="cardImg"
           component="img"
           height="auto"
           image={item.image}
           alt={item.title}
           
          />
     </div>
    {user.email ?(
     <Link  to={`/product/${item.id}`} style={{color:"inherit" , textDecoration:"none"}}>
       <div class="dws-text">
         <h3>Read now</h3>
      </div>
      </Link>
    ):(
      <Link  to={`/auth`} style={{color:"inherit" , textDecoration:"none"}}>
      <div class="dws-text">
        <h3>Read now</h3>
     </div>
     </Link>
    )}
      </div>
          <p className="cardTitle">{item.title}</p>
      <CardActions disableSpacing sx={{ justifyContent: 'space-around' }}>
      {user.email?(

        <IconButton  aria-label="add to favorites"  
                       onClick={() => addUserLike(email,item.id)}
                       color={"inherit"}
                       sx={{fontSize: 23}}
                      >
                   <FavoriteIcon />
          {likeCount}
        </IconButton>
      ):(
        <Link to={`/auth`}>
        <IconButton  aria-label="add to favorites"  
        onClick={() => addUserLike(email,item.id)}
        color={"inherit"}
        sx={{fontSize: 23}}
       >
    <FavoriteIcon />

    </IconButton>
    </Link>
      )}
      {user.email?(

        <IconButton 
        color={checkProductInFavs(item.id) ? "secondary" : "error"}
        onClick={() => addProductToFavs(item)}
        aria-label="add to favs"
                      >
          <StarBorderIcon />
        </IconButton>
      ):(

       <Link to={`/auth`}>
          <StarBorderIcon />
          </Link>
      )}
        {user.email ? (
              <Link to={`/product/${item.id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                  sx={{ mt: "20px", height: "50px" }}
                >
                 
                 Read more
                </Button>
              </Link>
            ) : (
              <>
             
              <Button variant="outlined" className='buttonLogin'              
              onClick={() => setOpenmodal(!openmodal) } 
              >
              {openmodal?(
                <h6>Назад</h6>
              ):(<h6>Login</h6>)}
               
             
              
            </Button>
              
                   {openmodal && <Modal/>}
           
            </>
            )}
     
      </CardActions>
    </Card>
  </Grid>
  );
};

export default ProductCard;