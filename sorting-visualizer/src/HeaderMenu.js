import React ,{useCallback} from 'react'
import './HeaderMenu.css';
import mergeSort from './algorithms/mergeSort'
import selectionSort from './algorithms/selectionSort'
import bubbleSort from './algorithms/bubbleSort'
import resetArray from './resetArray'

export default function HeaderMenu({setMaxBars,maxBars, curArray, setCurArray,animations, barWidth, setBarWidth}) {
    const merge = ()=>{
        mergeSort(curArray, 0, curArray.length-1, animations); 
        setCurArray(animations.current[4])
    }
    const selection = ()=>{
        selectionSort(curArray,  animations); 
        setCurArray(animations.current[4])
    }

    const bubble = () =>{
        bubbleSort(curArray,  animations); 
        setCurArray(animations.current[4])
    }
    const initArray=
        () => {
            setCurArray(resetArray(maxBars, Math.floor(window.innerHeight*0.8), 5 ))
            setBarWidth((window.innerWidth*0.9-4*maxBars)/maxBars)
        }
    return (

        <div className="HeaderMenu">
            <div className="Logo">
                <h1>Sorting Visualizer</h1>
            </div>

            <div className="funcButton">
                <button id="createNewArray" onClick={initArray}>Generate New Array</button>
                <input type="range" min="5" max="300" onChange={(e)=>setMaxBars((prev)=>e.target.value)}/>
                <div class="maxBars">
                    {maxBars}
                </div>
            </div>
            <div className="algorithmButton">
                <button id="mergeSort" onClick={merge}>Merge Sort</button>
                <button id="bubbleSort" onClick={bubble}>Bubble Sort</button>
                <button id="selectionSort" onClick={selection}>Selection Sort</button>

            </div>
        </div>
    )
}
