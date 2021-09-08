import { CardActionArea, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'
import { Card, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import {BrowserRouter as Router , Switch, Link, Route, Redirect } from 'react-router-dom'






const useStyles = makeStyles({



    card: {    
    //   maxWidth: 350,
    //   minHeight : 400,    
    },
    media: {
      marginLeft : 90,
      height: 200,
      width : 150
    },
    
  });

function HomePage() {

    const history = useHistory()


    const classes = useStyles();

    const breadHandler =()=>{

         history.push("/breadpage")
        

            }

    const cakeHandler =()=>{

         history.push("/cakepage")
    }
    
    const chocolateHandler =()=>{

        history.push("/chocolatepage")
    }


    return (
        <div className ={{display:"flex"}}>     
            <Card >
                <CardActionArea onClick ={breadHandler}>

            <CardMedia
             className={classes.media}
            image =" https://images.immediate.co.uk/production/volatile/sites/30/2020/08/olive-bread-swirls-7607020.jpg?webp=true&quality=90&resize=620%2C310"
            title= "Bread" />
                   
                
                <CardContent >
                    <Typography>
                        bread
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
           
            <Card >
                <CardActionArea onClick ={cakeHandler}>
            <CardMedia
             className={classes.media}
            image = "http://img.taste.com.au/Dg8mhKFk/taste/2016/11/top-50-cakes-image-4-66318-1.jpg"
            title= "Cake" />
                   
                
                <CardContent >
                    <Typography>
                        cake
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
          
      
            <Card >
                <CardActionArea onClick ={chocolateHandler}>
            <CardMedia
             className={classes.media}
            image = "https://www.foodbev.com/wp-content/uploads/2018/08/Cadbury-Darkmilk.jpg"
            title= "Chocolate" />
                   
                
                <CardContent >
                    <Typography>
                        Chocolate
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default HomePage
