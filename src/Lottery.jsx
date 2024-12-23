import React, { useState } from 'react'
import "./lottery.css"
import  {generate, sum15} from "./helper"
import LotteryTicket from './LotteryTicket'

function Lottery({ n,sum }) {
let [number, setNumber] = useState(generate(n));
let buyTicket = () => {
   setNumber(generate(n));
}
let isWinning = sum15(number) === sum;
console.log(isWinning);
    return (
        <div>
            <h1>Lottery!</h1>
            <p>Winning Goal is sum of ticket {sum}</p>
            <LotteryTicket ticket={number}/>
            <br/>
            
            {isWinning ? <h2> you won the game</h2> : <button onClick={buyTicket}> BuyTicket</button>}
         
        </div>
    )
}

export default Lottery
