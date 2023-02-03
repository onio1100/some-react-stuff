import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
// import { Circle } from './functions';
const Functions = React.lazy(() => import("./Functions"))


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

    // console.log(Functions);
    return (
        <div className='wraper'>
            <TestBody />
            {/* <Suspense fallback={<div>Wczytywanie...</div>}> */}
                <Functions />
            {/* </Suspense> */}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderStuff />);