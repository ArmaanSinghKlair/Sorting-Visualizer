export default function resetArray(maxBars, maxSize, minSize){
    let arr = [];
    
    for(let i=0; i<maxBars; i++){
        arr.push( Math.floor(Math.random()* (maxSize-minSize)) + minSize );
    }

    return arr;
}