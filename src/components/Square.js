
import React from "react";
import {Button ,makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 1 ,
    borderRadius: 3,
   color:'white',
    height: 60,
    marginRight: '2px', 
   marginTop: '2px',
   textAlign:'center',
   left:'45%',
   fontSize: '30px',
   fontWeight: 'bold'
  },

});

  
export default function Square(props) {
  
  const classes =  useStyles();
  return (
   
   < Button className={classes.root}  variant="contained"  onClick={props.onClick}>
      {props.value}
    </Button>
  
  );
}
   