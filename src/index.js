import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";

class TestBody extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            button: 0,
            buttonText: ["CLICK ME", "YOU CLICKED ME", "YOU CLICKED ME AGAIN", "PLEAS DON'T STOP CLICKING ME"],
        };
        this.buttonswitch = this.buttonswitch.bind(this);
    }

    buttonswitch() {
         let newButton = this.state.button;
        if(newButton < 3){
            newButton += 1;
        }
        this.setState({button: newButton});
        console.log(this.state.button);
    }
    render(){
        return(
            <div className='button' onClick={this.buttonswitch}>{this.state.buttonText[this.state.button]}</div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TestBody />);