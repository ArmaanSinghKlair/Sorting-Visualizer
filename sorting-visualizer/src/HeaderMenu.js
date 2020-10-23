import React ,{useState} from 'react'
import './HeaderMenu.css';
export default function HeaderMenu({setMaxBars,maxBars}) {

    return (

        <div className="HeaderMenu">
            <div className="Logo">
                <h1>Sorting Visualizer</h1>
            </div>

            <div className="funcButton">
                <button id="createNewArray">Generate New Array</button>
                <input type="range" min="5" max="300" onChange={(e)=>setMaxBars((prev)=>e.target.value)}/>
                <div class="maxBars">
                    {maxBars}
                </div>
            </div>
            <div className="algorithmButton">
                <button id="mergeSort">Merge Sort</button>
                <button id="mergeSort">Bubble Sort</button>
                <button id="mergeSort">Selection Sort</button>

            </div>
        </div>
    )
}
