import React ,{useState, useRef} from 'react'
import HeaderMenu  from './HeaderMenu';
import SortBars from './SortBars';

function SortingVisualizer() {
    const [maxBars, setMaxBars] = useState(100);
    const [speed, setSpeed] = useState(9);
    const [curArray, setCurArray] = useState([]);
    const [barWidth, setBarWidth]= useState()
    const animations = useRef([])
    return (
        <div className="SortingVisualizer">
            <HeaderMenu setMaxBars={setMaxBars} maxBars={maxBars} curArray={curArray} setCurArray={setCurArray} animations={animations} barWidth={barWidth} setBarWidth={setBarWidth} speed={speed} setSpeed={setSpeed}/>
            <SortBars maxBars={maxBars} curArray={curArray} setCurArray={setCurArray} animations={animations} barWidth={barWidth} setBarWidth={setBarWidth} speed={speed} setSpeed={setSpeed}/>
        </div>
    )
}

export default SortingVisualizer
