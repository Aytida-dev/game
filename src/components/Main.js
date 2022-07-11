import React from "react";

export default function Main() {

    //make a array of 10 random numbers
    const numbers = [];
    React.useEffect(() => {
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor((Math.random() * 6)+1));
    }
    setDice(numbers);
    }, []);
        
    const [dice, setDice] = React.useState([]);
    const [state, setState] = React.useState([false, false, false, false, false, false, false, false, false, false]);

    const blocks = dice.map((number, index) => (
        <button key={index} className="block" onClick={(event)=>setConst(event,index)} >
            {number}
        </button>
    ))

    function setConst(event,index) {
        setState((prev)=>(
            prev.map((item, i)=>{
                if(i===index){
                    return !item;
                }
                return item;
            }
        )
        ))

        event.target.classList.toggle("active");
    }    

function changeNumbers() {
    
    const change=[];
    blocks.forEach((block,index) => {
        if(!state[index]) {
            change[index] = Math.floor((Math.random() * 6)+1);
        }
        else {
            change[index] = dice[index];
        }
    })
    setDice(change);
    }

    function allAreEqual(array) {
        const result = array.every(element => {
          if (element === array[0]) {
            return true;
          }
        });
      
        return result;
      }

    return (
        <>
        {blocks}
        {!allAreEqual(dice) ?<button onClick={changeNumbers}>Roll</button> :<button onClick={()=>window.location.reload()}>Reset game</button>}
        </>
    );
}