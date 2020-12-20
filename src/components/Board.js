import React, {Component} from "react";
import Square from "./Square";
import {Grid} from "@material-ui/core";


export default class Board extends Component {
    renderSquare(i) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
    
      render() {
        return (
          
          <Grid container spacing={2}>
             <Grid container item xs={12} direction="row" ></Grid>
            <Grid container item xs={3} direction="column"></Grid>
  <Grid container item xs={5} direction="column">
  <h3 style={{paddingTop:"0%",paddingLeft:"25%"}}>* Tic-Toc-Toe *</h3>
  </Grid>
  <Grid container item xs={4} ></Grid>
  <Grid container item xs={12} direction="column" alignItems="center"style={{marginTop:"10%",marginBottom:"2%",paddingRight:"30%"}} >
          <div  >
            
            <div >
              
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div >
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div >
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
          </Grid>
         
          </Grid>
        );
      }
}
 
