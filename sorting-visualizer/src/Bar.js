import React, {useMemo} from 'react'
import './Bar.css'

function Bar({width, height}) {
    const style = useMemo(()=>{
        return {
            width: width,
            height :height
        }
    },[width,height])
    return (
        <div className="bar" style={style}>
            
        </div>
    )
}

export default Bar
