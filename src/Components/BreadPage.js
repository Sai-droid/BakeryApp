import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Typography,Button ,Dialog,DialogTitle} from '@material-ui/core';
import {makeStyles,Container,Grid,GridItem,CardActionArea,CardMedia,Card,CardContent} from '@material-ui/core';
import ProductCard from './ProductCard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme)=>({
    GridItem : {
        marginTop : 50,
        marginBottom : 30,        
    },
    title:{
        color : "#000000",   
    },
    text : {
        padding : 5
    },
    button : {
        backgroundColor : "#404040",

        color : "#FFFFFF",
        "&:hover": {
            backgroundColor: "#000000",
            
        }
    },
    grid : {
        marginTop : 60
    }
    

}))
export default function HomePage() {

    const classes = useStyles();
const [bread,setBread] = useState([]);
const [cost,setCost] = useState(0);

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

useEffect( async ()=>{
    const res = await axios.get("http://localhost:8080/data")
    const result = await res.data;
    console.log(result)
   setBread([...result])
   console.log(bread)
}
    
,[] )



const getPrice =(val)=>{
    if(val){
       
        setCost(cost+val)

        // alert(cost)
    }
     
}


const getRemovePrice =(val)=>{
    if(val){
       
        setCost(cost-val)
        // alert(cost)
    }
     
}


    return (
        <div >
            <Button
                className={classes.button}
                display="inline" 
                startIcon = {<ShoppingCartIcon/>}
                onClick={handleClickOpen}
                outlined
            >
                Proceed{cost}
            </Button>
            <div>
                {
                    open===true?
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                      Order is Placed
                    </DialogTitle>
                    
                   
                  </Dialog>:
                        null
                }
            </div>
              <Container >
            <Grid container>
                {
                    bread.map(item => {
                        return (
                            <Grid item key={item.id} xs={12} md={6} lg={4} className={classes.GridItem}>
                                
                               <ProductCard bread={item} giveprice ={getPrice} removeprice ={getRemovePrice} />
                            </Grid>
                        )
                    })

                }

            </Grid>
            
        </Container>
        </div>
    )
}


{/* <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.media}
          image={props.product.url}
          title="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.product.title}
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions> */}
{/*         
<Button size="small" color="primary" variant="outlined" onClick={()=>IncreaseCount()}>
          Add to Cart
        </Button>
        </CardActions>
    </Card> */}


    