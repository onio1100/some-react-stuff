import React from "react";

// export function random(min, max) {
//     return Math.random() * (max - min) + min;
//   }

  export class Functions extends React.Component{
    constructor(props){
      super(props);
      this.colorChange = this.colorChange.bind(this);
    }

    colorChange(e) {
      e.target.classList.toggle("circle-on");
    }

    render(){
      console.log("kółkow załadowane");
      return(
        <div className="circle" onClick={(e) => this.colorChange(e)}></div>
      )
    }
  }