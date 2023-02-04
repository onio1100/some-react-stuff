import React from "react";

  export default class Circle extends React.Component{
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