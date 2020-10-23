import React ,{useState, useEffect, useRef} from 'react'
import Bar from './Bar'
import './SortBars.css'
import resetArray from './resetArray'

function SortBars({maxBars, curArray, setCurArray,animations, barWidth, setBarWidth}) {
    
  


    useEffect(()=>{
        setCurArray(resetArray(maxBars, Math.floor(window.innerHeight*0.8), 5 ))
        setBarWidth((window.innerWidth*0.9-4*maxBars)/maxBars)
    },[maxBars])

    useEffect(()=>{        

      if(animations.current.length > 0){
        let cur = animations.current.shift()
        setTimeout(setCurArray(cur))  
      } 
    })

    
    //;

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


export default React.memo(SortBars)