import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import random from './random';
const Circle = React.lazy(() => import("./Circle"));


class TestBody extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            button: 0,
            buttonText: ["CLICK ME", "YOU CLICKED ME", "YOU CLICKED ME AGAIN", "PLEAS DON'T STOP CLICKING ME"],
            timeoutID: false,
        };
        this.buttonswitch = this.buttonswitch.bind(this);
    }

    buttonswitch() {
         let newButton = this.state.button;
        if(newButton < 3){
            newButton += 1;
            this.setState({button: newButton});
            
        }else{
            if(this.state.timeoutID !== false){
             clearTimeout(this.state.timeoutID);   
            }
            let ID = setTimeout(() => {
                this.setState({
                    button: 0,
                    buttonText:["YOU STOPED CLICKING ME :(", "YOU CLICKED ME", "YOU CLICKED ME AGAIN", "PLEAS DON'T STOP CLICKING ME"]
                })
            }, 5000);
            this.setState({timeoutID: ID});

        }
    }
    render(){
        return(
            <div className='button' onClick={this.buttonswitch}>{this.state.buttonText[this.state.button]}</div>
        )
    }
}

function RenderStuff(){
    let value;
    import("./random").then( value = "rgb(" + random(0,100) + "," + random(0,100) + "," + random(0,100) + ")");
    return (
        <div className='wraper'>
            <TestBody />
            <div className='circle' style={{backgroundColor: value}}></div>
            <Suspense fallback={<div>Wczytywanie...</div>}>
                <Circle />
            </Suspense>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderStuff />);