import React ,{useState} from 'react'
import HeaderMenu  from './HeaderMenu';
import SortBars from './SortBars';

function SortingVisualizer() {
    const [maxBars, setMaxBars] = useState(0);
    
    return (
        <div className="SortingVisualizer">
            <HeaderMenu setMaxBars={setMaxBars} maxBars={maxBars}/>
            <SortBars maxBars={maxBars} />
        </div>
    )
}

export default SortingVisualizer
