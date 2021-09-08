import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
const useStyles = makeStyles({
  card: {    
    maxWidth: 350,
    minHeight : 400,    
  },
  media: {
    marginLeft : 90,
    height: 200,
    width : 150
  },
  
});

function ProductCard(props) {
  const classes = useStyles();
  const [count, setCount] = useState(1)
 
  const IncreaseCount = () => {
    console.log(props.bread.price);

    // setCount(count+1)
     props.giveprice(props.bread.price)     
  }
  const DecreaseCount = () => {
    console.log(props.bread.price);

    // setCount(count+1)
     props.removeprice(props.bread.price)     
  }

  return (
    <>
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.media}
          image={props.bread.image}
          title={props.bread.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.bread.title}
          </Typography>
      
          <Typography  variant="body2" color ="textSecondary" component="p" >
            {props.bread.description}
          </Typography>
          <Typography  variant="body2" color ="textSecondary" component="p" >
            cost: {props.bread.price}
          </Typography>
          
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined" 
        onClick ={()=>{
            IncreaseCount();
        }} >
         <AddShoppingCartIcon /> AddItem 
        </Button>
        <Button size="small" color="primary" variant="outlined" 
         onClick ={()=>{
          DecreaseCount();
      }} >
        
        <RemoveShoppingCartIcon /> RemoveItem
        </Button>
        </CardActions>
    </Card>
    
    </>
  );
}

export default ProductCard