import React, { Fragment, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import random from './random';
const Circle = React.lazy(() => import("./Circle"));


class Mouth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrowsState: false,
            selectedClass: 0,
            classList: ["mouth-0","mouth-1", "mouth-2", "mouth-3"]
        };
        this.showArrows = this.showArrows.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
    }

    showArrows(){
        this.setState({
            arrowsState: this.state.arrowsState ? false : true,
        })
    }

    changeIndex(direction){
        let newIndex = this.state.selectedClass + direction;
        if(newIndex + 1 > this.state.classList.length){
            newIndex = 0;
        }
        if(newIndex < 0){
            newIndex = this.state.classList.length - 1;
        }
        this.setState({
            selectedClass: newIndex,
        })
    }

    render(){

        return(
            <Fragment>
                <div className={this.state.classList[this.state.selectedClass]} onClick={this.showArrows}></div>
                <div className={this.state.arrowsState ? 'arrow am-left' : 'arrow-off am-left'} onClick={() => this.changeIndex(-1)}></div>
                <div className={this.state.arrowsState ? 'arrow am-right' : 'arrow-off am-right'} onClick={() => this.changeIndex(1)}></div>
            </Fragment>
        )
    }
}

class Nose extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrowsState: false,
            selectedClass: 0,
            classList: ["nose-0", "nose-0 fliped", "nose-1","nose-2","nose-2 fliped","nose-1 round", "nose-3", "nose-4"],
        };
        this.turnArrowsOn= this.turnArrowsOn.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
    }
    
    turnArrowsOn(){
        this.setState({
            arrowsState: this.state.arrowsState ? false : true,
        });
    };

    changeIndex(direction){
        let newIndex = this.state.selectedClass + direction;
        if(newIndex + 1 > this.state.classList.length){
            newIndex = 0;
        }
        if(newIndex < 0){
            newIndex = this.state.classList.length - 1;
        }
        this.setState({
            selectedClass: newIndex,
        })
    }

    render(){
        return(
            <Fragment>
                <div className={this.state.classList[this.state.selectedClass]} onClick={this.turnArrowsOn}></div>
                <div className={this.state.arrowsState ? 'arrow a-left' : 'arrow-off a-left'} onClick={() => this.changeIndex(-1)}></div>
                <div className={this.state.arrowsState ? 'arrow a-right' : 'arrow-off a-right'} onClick={() => this.changeIndex(1)}></div>      
            </Fragment>
        )
    }
}

class TestBody extends React.Component{

    render(){
        return(
            <div className='button' onClick={this.buttonswitch}>
                <Nose></Nose>
                <Mouth></Mouth>
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

// koncept zmienić to w taki builder gdzie postaci gdzie można zmienić strzałkami wygląd części w sumie mozna łato zmieniając kalsy

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderStuff />);