import React ,{useState, useEffect} from 'react'
import Bar from './Bar';
import './SortBars.css'
function SortBars({maxBars}) {
    const [curArray, setCurArray] = useState([]);
    const [barWidth, setBarWidth] = useState()
  
    useEffect(()=>{
        setCurArray(resetArray(10, Math.floor(window.innerHeight*0.8), 5 ))
        setBarWidth((window.innerWidth*0.9-4*10)/10)
    },[])

    useEffect(()=>{
        setCurArray(resetArray(maxBars, Math.floor(window.innerHeight*0.8), 5 ))
        setBarWidth((window.innerWidth*0.9-4*maxBars)/maxBars)
    },[maxBars])



    return (
        <div className="SortBars">
            {curArray.map((val,ind)=>{
                return (
                    <Bar width={barWidth} height={val} key={ind} />
                )
            })}
        </div>
    )
}

function resetArray(maxBars, maxSize, minSize){
    let arr = [];
    
    for(let i=0; i<maxBars; i++){
        arr.push( Math.floor(Math.random()* (maxSize-minSize)) + minSize );
    }

    return arr;
}
export default React.memo(SortBars);
