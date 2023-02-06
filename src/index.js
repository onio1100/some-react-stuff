import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import random from './random';
const Circle = React.lazy(() => import("./Circle"));



class Nose extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noseAngel: 0,
        };
        this.noseFlip = this.noseFlip.bind(this);
    }
    noseFlip(){
        this.setState({
            noseAngel: this.state.noseAngel + 360,
        })
    }

    render(){
        return(
            <div className='nose' onClick={this.noseFlip} style={{transform: `rotate(${this.state.noseAngel}deg)`}}></div>
        )
    }
}

class TestBody extends React.Component{

    render(){
        return(
            <div className='button' onClick={this.buttonswitch}>
                <Nose></Nose>
            </div>
        )
    }
}

function RenderStuff(){
    let randomNumber;
    import("./random").then(randomNumber = random);
    function randomColor () {
        return "rgb(" + randomNumber(0,255) + "," + randomNumber(0,255) + "," + randomNumber(0,255) + ")"
    };
    console.log(randomColor());
    function changeColor(e){
        e.target.style.backgroundColor = randomColor();
    };

    return (
        <div className='wraper'>
            <TestBody />
            <div className='circle right' style={{backgroundColor: randomColor()}} onClick={changeColor}></div>
            <Suspense fallback={<div>Wczytywanie...</div>}>
                <Circle />
            </Suspense>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderStuff />);